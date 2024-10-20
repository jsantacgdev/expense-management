import type { IColumn } from "@shared-interfaces/column";

export const expensesTableHeaders: IColumn[] = [
  { field: "nombre", header: "Nombre" },
  { field: "cantidad", header: "Cantidad (€)" },
  { field: "categoria", header: "Categoria" },
  { field: "fecha", header: "Fecha" },
  { field: "tipo", header: "Tipo" },
];
