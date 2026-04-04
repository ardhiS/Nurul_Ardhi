import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            return 'vendor';
          }
        },
      },
    },
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
