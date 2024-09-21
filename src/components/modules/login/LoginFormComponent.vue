<template>
  <div
    class="flex flex-col items-center align-middle justify-center w-1/2 shadow-lg"
  >
    <Card class="w-full h-full">
      <template v-slot:header>
        <h1 class="text-center mt-3 font-bold text-2xl">Cashpilot</h1>
      </template>
      <template v-slot:content>
        <div class="flex flex-col items-center justify-center">
          <InputText v-model="usuario" label="Usuario" class="mb-10" />
          <InputPassword v-model="password" label="Contraseña" />
          <Button
            label="Entrar"
            class="w-48 mt-5"
            @click="emit('login', { usuario, password })"
          />
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex flex-col items-center justify-center">
          <span class="text-center text-sm">
            ¿No tienes cuenta?
            <router-link to="/register" class="text-blue-500">
              Registrate
            </router-link>
          </span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import InputText from "@shared/components/InputText.vue";
import Button from "primevue/button";
import InputPassword from "@/shared/components/InputPassword.vue";
import Card from "primevue/card";

const usuario: Ref<string> = ref("");
const password: Ref<string> = ref("");

const emit = defineEmits(["login"]);
</script>

<style scoped>
.background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>
