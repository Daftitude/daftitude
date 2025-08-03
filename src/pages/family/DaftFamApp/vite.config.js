import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/daft-app/DaftFamApp/', // ← must match repo + subfolder path
  plugins: [react()],
});