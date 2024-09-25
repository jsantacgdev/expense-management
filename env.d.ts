/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  /**
   * @property VITE_APP_VERSION - Versión del aplicativo
   */
  readonly VITE_APP_VERSION: string;
  /**
   * HMS - GEMITPM-6201
   * @property VITE_LOG_LEVEL - Nivel del logger: debug, ...
   */
  readonly VITE_LOG_LEVEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
