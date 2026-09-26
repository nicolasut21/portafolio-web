import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Vital para compatibilidad directa con GitHub Pages en cualquier subdirectorio
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
