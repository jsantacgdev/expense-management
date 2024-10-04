<template>
  <Card class="w-full h-auto table-card overflow-hidden">
    <template v-slot:header>
      <h1 class="text-center mt-3 font-bold text-2xl">Últimas transacciones</h1>
    </template>
    <template v-slot:content>
      <DataTable
        :value="items"
        tableStyle="min-width: 50%"
        :stripedRows="stripedRows"
        paginator
        :rows="10"
      >
        <Column
          v-for="column in columns"
          :key="column.field"
          :field="column.field"
          :header="column.header"
          :sortable="column.sortable"
        >
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";
import { type IColumn } from "../interfaces/column";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array as () => IColumn[],
    required: true,
  },
  stripedRows: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
});
</script>
<style lang="scss" scoped>
.table-card {
  max-height: 85%;
}

.p-datatable-custom-header .p-column-header {
  display: flex;
  justify-content: center;
}
</style>
