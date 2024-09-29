import { type RouteRecordRaw } from "vue-router";
import { ERoutes } from "./constants";

const ROUTES: RouteRecordRaw[] = [
  {
    path: ERoutes.HOME_ROUTE_PATH,
    name: ERoutes.HOME_ROUTE_NAME,
    component: () => import("@modules/views/MainView.vue"),
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
  {
    path: ERoutes.TRANSACCIONES_ROUTE_PATH,
    name: ERoutes.TRANSACCIONES_ROUTE_NAME,
    component: () => import("@modules/views/TransaccionesView.vue"),
  },
  {
    path: ERoutes.OBJETIVOS_ROUTE_PATH,
    name: ERoutes.OBJETIVOS_ROUTE_NAME,
    component: () => import("@modules/views/ObjetivosView.vue"),
  },
  {
    path: ERoutes.PRESUPUESTO_ROUTE_PATH,
    name: ERoutes.PRESUPUESTO_ROUTE_NAME,
    component: () => import("@modules/views/PresupuestoView.vue"),
  },
  {
    path: ERoutes.AJUSTES_ROUTE_PATH,
    name: ERoutes.AJUSTES_ROUTE_NAME,
    component: () => import("@modules/views/AjustesView.vue"),
  },
];

export default ROUTES;
