import { type RouteRecordRaw } from "vue-router";
import { ERoutes } from "./constants";

const ROUTES: RouteRecordRaw[] = [
  {
    path: ERoutes.HOME_ROUTE_PATH,
    name: ERoutes.HOME_ROUTE_NAME,
    component: () => import("../views/MainView.vue"),
  },
  {
    path: ERoutes.LOGIN_ROUTE_PATH,
    name: ERoutes.LOGIN_ROUTE_NAME,
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: ERoutes.REGISTER_ROUTE_PATH,
    name: ERoutes.REGISTER_ROUTE_NAME,
    component: () => import("../views/SignupView.vue"),
  },
];

export default ROUTES;
