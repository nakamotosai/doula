import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['vps-jp.tail4b5213.ts.net'],
  },
  preview: {
    allowedHosts: ['vps-jp.tail4b5213.ts.net'],
  },
})
