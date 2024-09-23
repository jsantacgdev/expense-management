export class GeneralUtils {
  public static isValid(object: any): boolean {
    return object !== null && object !== undefined;
  }

  public static isNotEmptyArray(object: any): boolean {
    return Array.isArray(object) && object.length > 0;
  }

  public static isString(object: any): boolean {
    return typeof object === "string";
  }

  public static isReadableString(object: any): boolean {
    return GeneralUtils.isString(object) && object.length > 0;
  }

  public static isValidNumber(object: any): boolean {
    return typeof object === "number" && !isNaN(object) && isFinite(object);
  }
}
