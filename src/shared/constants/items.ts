import type { MenuItem } from "primevue/menuitem";
import { ref, type Ref } from "vue";
import { ERoutes } from "@router/constants";

const items: Ref<MenuItem> = ref([
  {
    label: "Inicio",
    icon: "pi pi-home",
    url: ERoutes.HOME_ROUTE_PATH,
  },
  {
    label: "Transacciones",
    icon: "pi pi-chart-bar",
    url: ERoutes.TRANSACCIONES_ROUTE_PATH,
  },
  {
    label: "Presupuesto",
    icon: "pi pi-dollar",
    url: ERoutes.PRESUPUESTO_ROUTE_PATH,
  },
  {
    label: "Objetivos",
    icon: "pi pi-file-check",
    url: ERoutes.OBJETIVOS_ROUTE_PATH,
  },
  {
    label: "Ajustes",
    icon: "pi pi-cog",
    url: ERoutes.AJUSTES_ROUTE_PATH,
  },
  {
    label: "Salir",
    icon: "pi pi-sign-out",
  },
]);

export default items;
