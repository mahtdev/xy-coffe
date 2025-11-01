import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/xy-coffe/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});

