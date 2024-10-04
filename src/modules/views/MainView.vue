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
    <div class="col-span-1">
      <h1>MainView</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "@shared/components/DataTable.vue";
import { expensesTableHeaders } from "@shared/constants/tableHeaders";
import Card from "primevue/card";

const items = [
  {
    id: 1,
    cantidad: 30,
    nombre: "Compra de comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Supermercados",
    class: "text-center w-12",
  },
  {
    id: 2,
    cantidad: 20,
    nombre: "Gasolina",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Transportes",
    class: "text-center w-12",
  },
  {
    id: 3,
    cantidad: 10,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 4,
    cantidad: 5,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 5,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 6,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 7,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 8,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 9,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 10,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 7,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 8,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 9,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 10,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 7,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 8,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 9,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
  {
    id: 10,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
    class: "text-center w-12",
  },
];

const columns = [
  {
    field: "id",
    header: "Id",
    sortable: true,
  },
  {
    field: "cantidad",
    header: "Cantidad",
    sortable: true,
  },
  {
    field: "nombre",
    header: "Nombre",
    sortable: true,
  },
  {
    field: "fecha",
    header: "Fecha",
    sortable: true,
  },
  {
    field: "tipo",
    header: "Tipo",
    sortable: true,
  },
  {
    field: "categoria",
    header: "Categoria",
    sortable: true,
  },
];
</script>
