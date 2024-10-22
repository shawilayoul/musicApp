import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to the target server
      '/track': {
        target: 'https://musicserver-h836.onrender.com',
        changeOrigin: true,
        // Optional path rewrite if needed
        // rewrite: (path) => path, // Use this if you want to keep the original path
      },
    },
  },
});




