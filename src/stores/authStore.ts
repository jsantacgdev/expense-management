import { defineStore } from "pinia";
import {
  type IRegisterUser,
  type ILoginUser,
  type IUser,
} from "@shared-interfaces/auth";
import axios from "@axios/index";
import { EEndpoints } from "@shared/constants/endpoints";
import { logOut } from "@shared/utils/AuthUtils";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {} as IUser,
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials: ILoginUser) {
      try {
        const response = axios.post(EEndpoints.LOGIN, {
          username: credentials.username,
          password: credentials.password,
        });
        const { data } = await response;
        console.log(data);
        const { user } = data;
        console.log(user);
        this.user = {
          username: user.username,
          name: user.name,
          id: user.id,
        };
        console.log(this.user);
        this.isAuthenticated = true;
      } catch (error: any) {
        console.error(
          "Error en login:",
          error.response?.data?.msg || error.message
        );
      }
    },
    async register(user: IRegisterUser) {
      try {
        const response = axios.post(EEndpoints.REGISTER, { ...user });
        const { data } = await response;

        this.user = {
          username: user.username,
          name: data.name,
          id: data.id,
        };
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
      this.user = {} as IUser;
      this.isAuthenticated = false;
      logOut();
      window.location.reload();
    },
  },
  getters: {
    isAuthenticatedIn: (state: any) => state.isAuthenticated,
    getUser: (state: any) => state.user,
    getName: (state: any) => state.user.name,
  },
});
