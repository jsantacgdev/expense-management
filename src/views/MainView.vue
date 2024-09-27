<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "@shared/layout/HeaderComponent.vue";
</script>

<style scoped></style>
