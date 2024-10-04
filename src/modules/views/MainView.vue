<template>
  <div class="grid grid-cols-2 w-screen h-full bg-blue-200">
    <div class="col-span-1 flex items-start justify-center mt-32 ml-12">
      <DataTable
        :items="items"
        :columns="expensesTableHeaders"
        :striped-rows="true"
        class="w-4/5"
      />
    </div>
    <div class="col-span-1 flex items-start justify-center mt-32 ml-12">
      <ChartData :data="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartData from "@shared/components/ChartData.vue";
import DataTable from "@shared/components/DataTable.vue";
import { expensesTableHeaders } from "@shared/constants/tableHeaders";

const items = [
  {
    id: 1,
    cantidad: 30,
    nombre: "Compra de comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Supermercados",
  },
  {
    id: 2,
    cantidad: 20,
    nombre: "Gasolina",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Transportes",
  },
  {
    id: 3,
    cantidad: 10,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 4,
    cantidad: 5,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 5,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 6,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 7,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 8,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 9,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 10,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 11,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 12,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 13,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 14,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 15,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 16,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 17,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 18,
    cantidad: 2,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 19,
    cantidad: 200,
    nombre: "Comida",
    fecha: "01/01/2023",
    tipo: "Gasto",
    categoria: "Ropa",
  },
];
</script>
