import { defineStore } from "pinia";
import axios from "@axios/index";
import { EEndpoints } from "@shared/constants/endpoints";
import type { ICategoria } from "@shared-interfaces/common";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categorias: [] as ICategoria[],
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
  },
  getters: {
    getterCategorias: (state: any) => state.categorias,
  },
});
