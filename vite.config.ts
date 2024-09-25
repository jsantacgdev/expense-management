import { fileURLToPath, URL } from "node:url";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import CONFIG from "./tsconfig.app.json";
import PACKAGE from "./package.json";

const aliasReplace = (route: string) => route.replace("/*", "");

const alias: any = {};

const tsconfigPaths: any = CONFIG.compilerOptions.paths;

Object.keys(tsconfigPaths).forEach((key) => {
  alias[aliasReplace(key)] = resolve(
    __dirname,
    aliasReplace(tsconfigPaths[key][0])
  );
});

// Coge del package.json la versión y nombre del proyecto
process.env.VITE_APP_VERSION = process.env.npm_package_version;
process.env.VITE_APP_NAME = process.env.npm_package_name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  define: {
    __APP_VERSION__: JSON.stringify(PACKAGE.version),
  },
});
