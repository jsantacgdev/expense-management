import "./assets/index.scss";
import "./assets/components/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import "primeicons/primeicons.css"; // Iconos de PrimeVue
import InputText from "./shared/components/InputText.vue";
import StyleClass from "primevue/styleclass";
import ToastService from "primevue/toastservice";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      prefix: "p",
      darkModeSelector: "media",
    },
  },
  zIndex: {
    modal: 1100, //dialog, drawer
    overlay: 1000, //select, popover
    menu: 1000, //overlay menus
    tooltip: 1100, //tooltip
  },
  InputText: {
    component: InputText,
    StyleClass: StyleClass,
  },
});
app.use(ToastService);

app.mount("#app");
