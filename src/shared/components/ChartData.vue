<template>
  <Card class="w-full h-auto card overflow-hidden flex flex-col align-bottom">
    <template v-slot:header>
      <h1 class="text-center mt-3 font-bold text-2xl">Gastos</h1>
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
import { ChartColor } from "../constants/chartColors";
import Chart from "primevue/chart";
import Card from "primevue/card";

onMounted(() => {
  props.data.forEach((item: any) => {
    if (
      !chartDatasets.value
        .map((dataset: IChart) => dataset.label[0])
        .includes(item.categoria)
    ) {
      chartDatasets.value.push({
        label: [item.categoria],
        data: [item.cantidad],
        backgroundColor: [
          ChartColor[item.categoria as keyof typeof ChartColor],
        ],
        borderColor: [ChartColor[item.categoria as keyof typeof ChartColor]],
      });
    } else {
      chartDatasets.value[
        chartDatasets.value.findIndex(
          (dataset: IChart) => dataset.label[0] === item.categoria
        )
      ].data[0] += item.cantidad;
    }
  });

  chartData.value = {
    labels: ["Gastos"],
    datasets: [...chartDatasets.value],
  };
});

const chartDatasets: Ref<Array<IChart>> = ref([] as IChart[]);

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
