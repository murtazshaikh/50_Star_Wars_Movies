import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 Important part to fix 404 on refresh
  base: '/',
  server: {
    historyApiFallback: true,
  }
})
