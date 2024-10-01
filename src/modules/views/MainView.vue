<template>
  <h1>MainView</h1>
  <DataTable
    :items="items"
    :columns="expensesTableHeaders"
    :striped-rows="true"
  />
</template>

<script setup lang="ts">
import DataTable from "@shared/components/DataTable.vue";
import { expensesTableHeaders } from "@shared/constants/tableHeaders";

const items = [
  {
    id: 1,
    cantidad: 30,
    nombre: "Compra de comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Supermercados",
  },
  {
    id: 2,
    cantidad: 20,
    nombre: "Gasolina",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Transportes",
  },
  {
    id: 3,
    cantidad: 10,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 4,
    cantidad: 5,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
  },
  {
    id: 5,
    cantidad: 2,
    nombre: "Comida",
    fecha: "2023-01-01",
    tipo: "Gasto",
    categoria: "Comida",
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
