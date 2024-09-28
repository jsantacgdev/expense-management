<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "@shared/layout/HeaderComponent.vue";
import FooterComponent from "@/shared/layout/FooterComponent.vue";
</script>

<style scoped></style>
