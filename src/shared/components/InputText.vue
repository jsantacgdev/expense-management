<template>
  <div>
    <FloatLabel>
      <InputText id="inputtext" v-model="valueComp" />
      <label for="inputtext">{{ label }}</label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from "vue";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const valueComp = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped></style>
