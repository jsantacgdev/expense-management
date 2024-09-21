import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@axios": fileURLToPath(new URL("./src/plugins/axios", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@shared-types": fileURLToPath(
        new URL("./src/shared/types", import.meta.url)
      ),
    },
  },
});
