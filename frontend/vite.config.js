import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"], // add .JSX here
  },
  assetsInclude: ["**/*.JSX"], // <-- this tells Vite to include .JSX files
});
