<template>
  <div>
    <FloatLabel>
      <InputText id="inputtext" v-model="valueComp" />
      <label for="inputtext">
        <span class="p-float-label-label">{{ label }}</span>
      </label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
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
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
