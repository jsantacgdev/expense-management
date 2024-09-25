import { defineStore } from "pinia";
import { type IUser, type ICredentials } from "@shared-types/user.d";
import axios from "@axios/index";
import { EEndpoints } from "@/shared/constants/endpoints";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials: ICredentials) {
      try {
        const response = axios.post(EEndpoints.LOGIN, {
          username: credentials.username,
          password: credentials.password,
        });
        const { data } = await response;
        console.log(data.msg);
        this.user = credentials.username;
        this.isAuthenticated = true;
      } catch (error: any) {
        console.error(
          "Error en login:",
          error.response?.data?.msg || error.message
        );
      }
    },
    async register(user: IUser) {
      try {
        const response = axios.post(EEndpoints.REGISTER, { ...user });
        const { data } = await response;
        console.log(data.msg);
        this.user = user.username;
        this.isAuthenticated = true;
      } catch (error: any) {
        console.error(
          "Error en register:",
          error.response?.data?.msg || error.message
        );
      }
    },
    async logout() {
      await axios.post(EEndpoints.LOGOUT);
      this.user = "";
      this.isAuthenticated = false;
    },
  },
  getters: {
    isAuthenticatedIn: (state: any) => state.isAuthenticated,
    getUser: (state: any) => state.user,
  },
});
