import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';  // <-- Import required for alias

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  // <-- Add this
    }
  },
  server: {
    port: 5000, // change according what we want
  },
  base: '/naurah-portfolio/',
});