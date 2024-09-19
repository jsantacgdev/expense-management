<template>
  <div class="w-screen grid grid-cols-2 overflow-hidden">
    <div class="cols-span-1 relative w-full h-screen background">
      <img
        src="../assets/img/money-background.jpg"
        class="absolute inset-0 w-full h-full z-[-1]"
        alt="Descripción de la imagen"
      />
      <h1
        class="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
        style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7)"
      >
        Cashpilot
      </h1>
    </div>
    <div
      class="cols-span-1 flex flex-col items-center align-middle justify-center"
    >
      <InputText v-model="usuario" label="Usuario" class="mb-10" />
      <InputPassword v-model="password" label="Contraseña" />
      <Button label="Entrar" class="w-48 mt-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import InputText from "@shared/components/InputText.vue";
import Button from "primevue/button";
import InputPassword from "@/shared/components/InputPassword.vue";

const usuario: Ref<string> = ref("");
const password: Ref<string> = ref("");
</script>

<style scoped>
.background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>
