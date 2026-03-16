import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: set base to repo name, e.g. '/repo-name/'
  // For local dev or custom domain, keep as '/'
  base: '/vr-project/',
})
