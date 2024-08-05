import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Specify any external dependencies here if needed
      external: ["axios", "react-hook-form"], // Add any other dependencies as necessary
    },
  },
});
