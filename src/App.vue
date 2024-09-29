<template>
  <div class="w-screen overflow-hidden">
    <header
      v-if="
        currentPath !== ERoutes.LOGIN_ROUTE_PATH &&
        currentPath !== ERoutes.REGISTER_ROUTE_PATH
      "
    >
      <HeaderComponent />
    </header>
    <main class="flex flex-col h-screen w-screen justify-center items-center">
      <RouterView />
    </main>
    <footer
      v-if="
        currentPath !== ERoutes.LOGIN_ROUTE_PATH &&
        currentPath !== ERoutes.REGISTER_ROUTE_PATH
      "
    >
      <FooterComponent />
    </footer>
  </div>
  <Toast position="bottom-right" group="br" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterComponent from "@layout/FooterComponent.vue";
import HeaderComponent from "@layout/HeaderComponent.vue";
import { ERoutes } from "@router/constants";
import { useRoute } from "vue-router";
import { ref, type Ref, computed } from "vue";
import Toast from "primevue/toast";

const route = useRoute();
const currentPath = computed(() => route.path);
</script>
