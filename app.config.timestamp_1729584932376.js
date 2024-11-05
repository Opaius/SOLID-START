// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var app_config_default = defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server
  }
});
export {
  app_config_default as default
};
