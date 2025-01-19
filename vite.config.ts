import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
