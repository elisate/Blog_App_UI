import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove 'axios' from external so it gets bundled
      external: [],
    },
  },
});
