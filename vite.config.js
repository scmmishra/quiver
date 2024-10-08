import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      composables: path.resolve("./src/composables"),
      utils: path.resolve("./src/utils"),
      components: path.resolve("./src/components"),
    },
  },
});
