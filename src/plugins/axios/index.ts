import type { IAccesToken } from "@shared/interfaces/auth";
import {
  decodeAccessToken,
  getCookieToken,
  logOut,
} from "@shared/utils/AuthUtils";
import { GeneralUtils } from "@shared/utils/GeneralUtils";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
  AxiosHeaders,
} from "axios";

const DEFAULTS: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 12000,
  withCredentials: true,
};

const axiosInstance: AxiosInstance = axios.create(DEFAULTS);

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token: string = getCookieToken();
    const headers: AxiosHeaders = config.headers || {};

    if (GeneralUtils.isReadableString(token)) {
      headers.Authorization = `Bearer ${token}`;
    }

    config.headers = headers;
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response.data);
    if (
      response.data["accessToken"] != null &&
      response.data["accessToken"] !== ""
    ) {
      const decodedToken: IAccesToken = decodeAccessToken(
        response.data["accessToken"]
      ) as IAccesToken;
      if (GeneralUtils.isValid(decodedToken)) {
        console.log(decodedToken);
      }
    } else {
      console.log(response);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.reload();
      logOut();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
