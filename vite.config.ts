import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Copy the SPA shell into /privacy and /support so GitHub Pages deep links boot React. */
function spaPageFallbacks(routes: string[]): Plugin {
  return {
    name: 'spa-page-fallbacks',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'docs')
      const indexHtml = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexHtml)) return

      for (const route of routes) {
        const dir = path.join(outDir, route)
        fs.mkdirSync(dir, { recursive: true })
        fs.copyFileSync(indexHtml, path.join(dir, 'index.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaPageFallbacks(['privacy', 'support'])],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    outDir: 'docs',
  },
})
