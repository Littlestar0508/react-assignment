import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
});
