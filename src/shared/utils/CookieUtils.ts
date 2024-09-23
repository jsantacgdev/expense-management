import { GeneralUtils } from "./GeneralUtils";

function getCookieLocalExpirationDateKey(key: string): string {
  return `Cookie-${key}-Expiration-Date`;
}

function getCookieLocalExpirationDate(key: string): string {
  return localStorage.getItem(getCookieLocalExpirationDateKey(key)) ?? "";
}

function cookieLocalExpirationDateExists(key: string): boolean {
  return GeneralUtils.isValid(getCookieLocalExpirationDate(key));
}

function setCookieLocalExpirationDate(key: string, expires: Date): void {
  const localStorageKey: string = getCookieLocalExpirationDateKey(key);
  localStorage.setItem(localStorageKey, expires.getTime().toString());
}

export function deleteCookieLocalExpirationDate(key: string): void {
  const localStorageKey: string = getCookieLocalExpirationDateKey(key);
  if (cookieLocalExpirationDateExists(key)) {
    localStorage.removeItem(localStorageKey);
  }
}

export function setCookie(
  key: string,
  value: string | number | boolean,
  expiration: number,
  milis = false
): void {
  let cookie = `${key}=${encodeURIComponent(value)}`;
  if (GeneralUtils.isValidNumber(expiration)) {
    try {
      const expires: Date = new Date(milis ? expiration * 1000 : expiration);
      cookie += `; expires=${expires}`;
      cookie += "; Secure";
      setCookieLocalExpirationDate(key, expires);
    } catch (e) {
      console.warn(
        "No es posible establecer la fecha de expiración de la cookie"
      );
      console.error("Se ha producido un error inesperado", e);
    }
  }
  document.cookie = cookie;
}

export function getCookie(key: string): string {
  let cookie: string = "";
  if (document.cookie) {
    const cookieList = document.cookie.split(";");
    const { length } = cookieList;
    let found = false;
    for (let i = 0; i < length && !found; i++) {
      const cookieKey: string = cookieList[i].split("=")[0].trim();
      if (cookieKey === key) {
        found = true;
        cookie = cookieList[i].trim();
      }
    }
  }
  // console.log(`Valor de la cookie [${key}]: `, cookie);
  return cookie;
}

export function cookieExists(key: string): boolean {
  return GeneralUtils.isValid(getCookie(key));
}

export function cookieIsValid(key: string): boolean {
  const cookieExpirationExists = cookieLocalExpirationDateExists(key);
  const cookieExistsFlag = cookieExists(key);

  if (cookieExpirationExists && cookieExistsFlag) {
    const expirationDate: string = getCookieLocalExpirationDate(key);
    if (GeneralUtils.isReadableString(expirationDate)) {
      const expirationTimestamp = +expirationDate;
      const currentTime = new Date().getTime();
      // Si la fecha de expiración es mayor al tiempo actual, la cookie es válida
      return expirationTimestamp > currentTime;
    }
  }
  // Si no hay cookie o está expirada
  return false;
}

export function getCookieValue(key: string): string | number | boolean {
  const cookie = getCookie(key);
  let fixedValue: string | number | boolean = "";
  if (cookie) {
    const value = cookie.split("=")[1].trim();
    if (value) {
      fixedValue = decodeURIComponent(value);
    }
  }
  return fixedValue;
}

export function deleteCookie(key: string): boolean {
  let deleted: boolean = false;
  try {
    const cookie = getCookie(key);
    if (cookie) {
      deleteCookieLocalExpirationDate(key);
      document.cookie = `${key}=; max-age=0`;
      deleted = true;
    }
  } catch (e) {
    console.warn("No ha sido posible borrar la cookie solicitada ", key);
    console.error("Se ha producido un error inesperado", e);
  }
  return deleted;
}
