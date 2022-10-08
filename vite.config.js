import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development';
  const serverUrl = isDev ? 'http://localhost:3000' : 'https://natours-arun.herokuapp.com';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1': {
          target: serverUrl,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: path => path.replace(/^\/api\/v1/, `${serverUrl}/api/v1`),
        },
      },
    },
  };
});
