import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1': {
          target: isDev ? 'http://localhost:3000' : 'https://natours-arun.herokuapp.com',
          changeOrigin: isDev,
          secure: !isDev,
        },
      },
    },
  };
});
