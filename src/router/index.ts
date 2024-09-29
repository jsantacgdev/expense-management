import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouterOptions,
} from "vue-router";
import ROUTES from "./routes";
import { ERoutes } from "./constants";
import { cookieIsValid } from "@shared/utils/CookieUtils";
import { clearSessionData } from "@/shared/utils/AuthUtils";

const AUTH_COOKIE_KEY = "Cash-Token";

const OPTIONS: RouterOptions = {
  history: createWebHistory(),
  routes: ROUTES,
};

const router = createRouter(OPTIONS);

router.beforeResolve((to, from, next) => {
  const publicPages = [ERoutes.LOGIN_ROUTE_NAME, ERoutes.REGISTER_ROUTE_NAME];

  const authRequired = () => !publicPages.includes(to.name as string);

  const validSession = cookieIsValid(AUTH_COOKIE_KEY);
  if (
    authRequired() &&
    to.name !== ERoutes.LOGIN_ROUTE_NAME &&
    to.name !== ERoutes.REGISTER_ROUTE_NAME &&
    !validSession
  ) {
    clearSessionData();
    next({ name: ERoutes.LOGIN_ROUTE_NAME });
  } else {
    next();
  }
});

export default router;
