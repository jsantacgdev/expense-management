import { defineStore } from "pinia";
import axios from "@axios/index";
import { EEndpoints } from "@shared/constants/endpoints";
import type { ICategoria, ITipoGasto, IGasto } from "@shared-interfaces/common";

export const useCommonStore = defineStore("common", {
  state: () => ({
    categorias: [] as ICategoria[],
    tipoGastos: [] as ITipoGasto[],
    gastos: [] as IGasto[],
  }),
  actions: {
    async categorias() {
      try {
        const response = await axios.get(EEndpoints.CATEGORIES);
        const { data } = await response;

        this.categorias = data.categories;

        this.categorias = data.categories;
      } catch (error: any) {
        console.error(
          "Error el obtener las categorias:",
          error.response?.data?.msg || error.message
        );
      }
    },
    async tipoGastos() {
      try {
        const response = await axios.get(EEndpoints.EXPENSE_TYPES);
        const { data } = await response;
        this.tipoGastos = data.tipos;
      } catch (error: any) {
        console.error(
          "Error el obtener los tipos de gastos: ",
          error.response?.data?.msg || error.message
        );
      }
    },
    async gastos(idUsuario: string) {
      try {
        const response = await axios.post(EEndpoints.EXPENSES, {
          user: idUsuario,
        });
        const { data } = await response;
        this.gastos = data.gastos;
      } catch (error: any) {
        console.error(
          "Error el obtener los gastos: ",
          error.response?.data?.msg || error.message
        );
      }
    },
  },
  getters: {
    getterCategorias: (state: any) => state.categorias,
    getterTipoGastos: (state: any) => state.tipoGastos,
    getterGastos: (state: any) => state.gastos,
  },
});
