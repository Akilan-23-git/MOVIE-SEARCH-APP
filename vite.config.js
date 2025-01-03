import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['aframe', 'aframe-ar']
  }
});
