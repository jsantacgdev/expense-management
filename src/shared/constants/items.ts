import type { MenuItem } from "primevue/menuitem";
import { ref, type Ref } from "vue";

const items: Ref<MenuItem> = ref([
  {
    label: "Inicio",
    icon: "pi pi-home",
  },
  {
    label: "Transacciones",
    icon: "pi pi-chart-bar",
  },
  {
    label: "Presupuesto",
    icon: "pi pi-dollar",
  },
  {
    label: "Objetivos",
    icon: "pi pi-file-check",
  },
  {
    label: "Ajustes",
    icon: "pi pi-cog",
  },
  {
    label: "Salir",
    icon: "pi pi-sign-out",
  },
]);

export default items;
