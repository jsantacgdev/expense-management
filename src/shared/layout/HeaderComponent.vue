<template>
  <div class="card bg-blue-500 absolute top-0 w-full">
    <Menubar :model="items" />
  </div>
</template>
<script setup lang="ts">
import Menubar from "primevue/menubar";
import { type Ref, ref } from "vue";
import items from "@shared/constants/items";
import type { MenuItem } from "primevue/menuitem";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

function emitLogoutEvent() {
  console.log("emitLogoutEvent");
  authStore.logout();
}

items.value.find((item: MenuItem) => item.label === "Salir").command =
  emitLogoutEvent;
</script>

<style scoped></style>
