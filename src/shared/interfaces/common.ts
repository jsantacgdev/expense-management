export interface ICategoria {
  codigo: string;
  nombre_categoria: string;
}

export interface ITipoGasto {
  codigo: string;
  descripcion: string;
}

export interface IGasto {
  id: string;
  nombreGasto: string;
  cantidad: string;
  fechaGasto: string;
  tipoGasto: string;
  categoria: string;
  usuario: string;
}
