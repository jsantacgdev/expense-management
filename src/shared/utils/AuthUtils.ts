import { decodeJwt } from "jose";
import type { IAccesToken } from "../interfaces/auth";
import {
  cookieIsValid,
  setCookie,
  deleteCookieLocalExpirationDate,
  deleteCookie,
  cookieExists,
  getCookieValue,
} from "./CookieUtils";
import { useAuthStore } from "@/stores/authStore";

const AUTH_COOKIE_KEY = "Cash-Token";

function getDecodedToken(token: string): IAccesToken {
  return decodeJwt(token) as IAccesToken;
}

export function decodeAccessToken(token: string): IAccesToken {
  let authConf: IAccesToken;
  let checkValidCookie = true;
  try {
    authConf = getDecodedToken(token);
    setCookie(AUTH_COOKIE_KEY, token, authConf.exp || 3600, true);
  } catch (e) {
    console.warn("No se ha podido decodificar el token de acceso");
    console.error("Se ha producido un error inesperado", e);
    checkValidCookie = false;
    throw e;
  }
  return authConf;
}

export function hasBeenLogged(): boolean {
  return cookieIsValid(AUTH_COOKIE_KEY);
}

export function clearSessionData(): void {
  deleteCookieLocalExpirationDate(AUTH_COOKIE_KEY);
  deleteCookie(AUTH_COOKIE_KEY);
  localStorage.removeItem("user_id");
  localStorage.removeItem("username");
}

export function refreshStoredSession(): boolean {
  let sessionUpdated = false;
  try {
    if (hasBeenLogged()) {
      sessionUpdated = true;
    }
  } catch (e) {
    console.warn("No se ha podido actualizar la sesión almacenada");
    console.error("Se ha producido un error inesperado", e);
    throw e;
  }
  return sessionUpdated;
}

export function logOut(): boolean {
  let deleted: boolean = false;
  try {
    if (cookieExists(AUTH_COOKIE_KEY)) {
      clearSessionData();
    }
    deleted = true;
  } catch (e) {
    console.warn("No ha sido posible eliminar la sesión");
    console.error("Se ha producido un error inesperado", e);
    throw e;
  }
  return deleted;
}

export function getCookieToken(): string {
  return hasBeenLogged() ? (getCookieValue(AUTH_COOKIE_KEY) as string) : "";
}
