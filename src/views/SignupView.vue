<template>
  <div class="w-screen grid grid-cols-3 overflow-hidden">
    <div class="col-span-2 relative w-full h-screen background">
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
      class="col-span-1 flex flex-col items-center align-middle justify-center"
    >
      <SignupComponent @signup="onClickSignupBtn" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SignupComponent from "@/components/modules/signup/SignupComponent.vue";
import type { IUser } from "@/shared/types/user";
import { useAuthStore } from "@stores/authStore";

const authStore = useAuthStore();

const onClickSignupBtn = (user: IUser) => {
  authStore.register(user);
};
</script>

<style scoped>
.background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>
