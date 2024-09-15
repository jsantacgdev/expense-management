<template>
  <div class="grid grid-flow-row w-screen">
    <div class="col-span-6"><h1 class="text-5xl">LOGIN VIEW</h1></div>
    <div class="col-span-6">
      <InputText :label="'Usuario'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "@shared/components/InputText.vue";
</script>

<style lang="scss" scoped></style>
