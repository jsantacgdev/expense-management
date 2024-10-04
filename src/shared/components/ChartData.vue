<template>
  <Card class="w-full h-auto card overflow-hidden flex flex-col align-bottom">
    <template v-slot:header>
      <h1 class="text-center mt-3 font-bold text-2xl">Últimas transacciones</h1>
    </template>
    <template v-slot:content>
      <div class="chart-container">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import type { IChart, IChartData } from "@shared/interfaces/chart";
import Chart from "primevue/chart";
import Card from "primevue/card";

const chartLabels: Ref<Array<string>> = ref([]);
const chartDatasets: Ref<Array<IChart>> = ref([
  {
    label: [],
    data: [],
    backgroundColor: ["#3b82f6"],
    borderColor: ["#3b82f6"],
    borderWidth: 1,
  },
]);

const chartData: Ref<IChartData> = ref({
  labels: chartLabels.value,
  datasets: chartDatasets.value,
});

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  chartOptions: {
    type: Object,
    default: () => ({
      title: { display: true, text: "Cantidad por Categoría" },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }),
  },
});

props.data.forEach((item: any) => {
  if (!chartLabels.value.includes(item.categoria)) {
    chartLabels.value.push(item.categoria);
    chartDatasets.value[0].data.push(item.cantidad);
    chartDatasets.value.push({
      label: item.categoria,
      data: [item.cantidad],
      backgroundColor: ["#3b82f6"],
      borderColor: ["#3b82f6"],
      borderWidth: 1,
    });
  } else {
    const index = chartLabels.value.indexOf(item.categoria);

    chartDatasets.value[index].data[0] += item.cantidad;
  }
});
</script>
<style lang="scss" scoped>
.card {
  height: 85%; // Asegura que el card ocupe todo el espacio disponible.
  display: flex;
  flex-direction: column;
}

.chart-container {
  flex-grow: 1; // Hace que el gráfico crezca para ocupar el espacio disponible.
  height: 100%; // Asegura que el gráfico ocupe todo el espacio dentro del card.
}
</style>
