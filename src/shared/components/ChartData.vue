<template>
  <Card class="w-full h-auto card overflow-hidden flex flex-col align-bottom">
    <template v-slot:header>
      <h1 class="text-center mt-3 font-bold text-2xl">
        Gastos {{ chartLabels }}
      </h1>
    </template>
    <template v-slot:content>
      <div class="chart-container">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import type { IChart, IChartData } from "@shared/interfaces/chart";
import Chart from "primevue/chart";
import Card from "primevue/card";

onMounted(() => {
  chartData.value = {
    labels: chartLabels.value,
    datasets: [chartDatasets.value],
  };
});

const chartLabels: Ref<Array<string>> = ref([]);
const chartDatasets: Ref<IChart> = ref({
  label: [],
  data: [],
  backgroundColor: [],
  borderColor: [],
  borderWidth: 0,
} as IChart);

const chartData: Ref<IChartData> = ref({} as IChartData);

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

function generarColorAleatorio() {
  // Generamos un número hexadecimal aleatorio de 6 dígitos
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  // Añadimos el prefijo '#'
  return "#" + hex;
}

props.data.forEach((item: any) => {
  const color = generarColorAleatorio();
  if (!chartLabels.value.includes(item.categoria)) {
    chartLabels.value.push(item.categoria);
    chartDatasets.value.label.push(item.categoria);
    chartDatasets.value.data.push(item.cantidad);
    chartDatasets.value.backgroundColor.push(color);
    chartDatasets.value.borderColor.push(color);
    chartDatasets.value.borderWidth = 1;
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
