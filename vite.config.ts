import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // слушать на 0.0.0.0 — доступ с других устройств в сети
  },
})
