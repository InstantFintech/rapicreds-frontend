import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // NOTE: Put here the path to which the assets shall build for production deployment:
  //base: '/path/',
});
