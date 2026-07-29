import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so it works both at
// <user>.github.io/ and <user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
