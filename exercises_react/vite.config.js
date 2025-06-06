import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for development server and React plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests to the REST backend
    proxy: {
      '/exercises': {
        target: 'http://localhost:3000'
      } 
    }
  }
})
