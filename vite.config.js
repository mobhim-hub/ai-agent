import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true,
    port: 5173, // or whatever you're using
    allowedHosts: ['.ngrok-free.app', 'localhost', '127.0.0.1'],
  },
})
