import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to '/your-repo-name/' if deploying to username.github.io/repo-name
  server: {
    port: 3000,
    open: true
  }
})
