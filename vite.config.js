import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set the source directory
  build: {
    outDir: '../dist', // Specify the output directory relative to the root
  },
  // If you have any path aliases, define them here
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

