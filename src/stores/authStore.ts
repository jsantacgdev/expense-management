import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import { type IUser, type ICredentials } from "@shared/types/user";
import axiosInstance from "@axios/index";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials: ICredentials) {
      try {
        const response = axiosInstance.post("/login", credentials);
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
        const response = axiosInstance.post("/register", user);
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
      await axiosInstance.post("/logout");
      this.user = "";
      this.isAuthenticated = false;
    },
  },
  getters: {
    isLoggedIn: (state: any) => state.isAuthenticated,
    getUser: (state: any) => state.user,
  },
});
