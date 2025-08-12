import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/website/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-select'],
        }
      }
    }
  }
});