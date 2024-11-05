import { defineConfig } from "@solidjs/start/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      hmr: {
        port: 3001,
      },
    },
  },
});
