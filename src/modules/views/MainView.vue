<template>
  <div class="grid grid-cols-2 w-screen h-full bg-blue-200">
    <div class="col-span-1 flex items-start justify-center mt-32 ml-12">
      <DataTable
        :items="gastos"
        :columns="expensesTableHeaders"
        :striped-rows="true"
        class="w-4/5"
      />
    </div>
    <div class="col-span-1 flex items-start justify-center mt-32 ml-12">
      <ChartData :data="gastos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ICategoria,
  IGasto,
  ITipoGasto,
} from "@/shared/interfaces/common";
import ChartData from "@shared/components/ChartData.vue";
import DataTable from "@shared/components/DataTable.vue";
import { expensesTableHeaders } from "@shared/constants/tableHeaders";
import { useCommonStore } from "@stores/commonStore";
import { useAuthStore } from "@stores/authStore";
import { ref, type Ref } from "vue";

const commonStore = useCommonStore();
const authStore = useAuthStore();

const usuario = authStore.getUser;

const gastos: Ref<IGasto[]> = ref([]);
commonStore.gastos(usuario.id).then(() => {
  gastos.value = commonStore.getterGastos;
});
</script>
