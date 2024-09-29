<template>
  <MainComponent />
</template>

<script setup lang="ts">
import router from "@/router";
import MainComponent from "@/shared/layout/MainComponent.vue";
import { ref, type Ref } from "vue";

const thisRoute: Ref<String> = ref(router.currentRoute.value.name as string);
console.log(thisRoute.value);
</script>

<style scoped></style>
