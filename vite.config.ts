import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from "fs"

// Zero-dependency plugin: copies the root-level image/ folder into dist/image/
// This is needed because Vite's publicDir only copies from public/, not image/.
// The GitHub Pages deploy workflow uploads ./dist, so image/ must live inside it.
const copyImageDir = {
  name: 'copy-image-dir',
  closeBundle() {
    if (fs.existsSync('image')) {
      fs.cpSync('image', 'dist/image', { recursive: true })
    }
  },
}

export default defineConfig({
  plugins: [react(), copyImageDir],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
