import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: { 
        "/api": {
          target: env.VITE_BACKEND_URL || "http://backend:8080",
          changeOrigin: true,
          secure: false
        }
      },
    },
  };
});
