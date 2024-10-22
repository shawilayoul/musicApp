import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests to the target server
      '/': {
        target: 'https://musicserver-h836.onrender.com',
        changeOrigin: true,
        // Optionally, you can rewrite paths if needed
        // rewrite: (path) => path, // Use this if you want to keep the original path
      },
    },
  },
});

