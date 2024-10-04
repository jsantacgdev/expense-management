import type { IColumn } from "@shared/interfaces/column";

export const expensesTableHeaders: IColumn[] = [
  { field: "nombre", header: "Nombre", class: "text-center" },
  { field: "cantidad", header: "Cantidad (€)", class: "text-center" },
  { field: "categoria", header: "Categoria", class: "text-center" },
  { field: "fecha", header: "Fecha", class: "text-center" },
  { field: "tipo", header: "Tipo", class: "text-center" },
];
