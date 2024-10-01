<template>
  <div class="card">
    <DataTable
      :value="items"
      tableStyle="min-width: 60rem"
      :stripedRows="stripedRows"
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
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional
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
