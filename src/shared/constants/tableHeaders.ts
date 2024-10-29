import type { IColumn } from "@shared-interfaces/column";

export const expensesTableHeaders: IColumn[] = [
  { field: "nombre_gasto", header: "Nombre" },
  { field: "cantidad", header: "Cantidad (€)" },
  { field: "categoria", header: "Categoria" },
  { field: "fecha_gasto", header: "Fecha" },
  { field: "tipo", header: "Tipo" },
];
