<template>
  <div>
    <FloatLabel>
      <Password
        v-model="valueComp"
        id="password"
        :feedback="false"
        toggleMask
      />
      <label for="inputtext">
        <span class="p-float-label-label">{{ label }}</span>
      </label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
import Password from "primevue/password";
import FloatLabel from "primevue/floatlabel";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const valueComp = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style>
.p-inputtext {
  width: 12rem;
  background-color: white;
  color: black;
}

.p-inputtext:enabled:focus {
  box-shadow: 0 0 0 0.25rem rgb(0 123 255 / 25%);
  border-color: rgb(0 123 255 / 25%);
}
</style>
