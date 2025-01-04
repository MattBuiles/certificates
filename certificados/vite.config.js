import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/certificates/", // Reemplaza con el nombre del repositorio
});
