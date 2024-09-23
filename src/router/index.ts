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
  history: createWebHashHistory(),
  routes: ROUTES,
};

const router = createRouter(OPTIONS);

  } else {
    next();
  }
});

export default router;
