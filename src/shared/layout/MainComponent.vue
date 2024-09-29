<template>
  <div class="w-screen overflow-hidden">
    <header>
      <HeaderComponent />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
</script>
