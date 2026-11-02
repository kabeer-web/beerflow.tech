import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { prerender } from './scripts/prerender.mjs'

// Writes per-page HTML, sitemap.xml, robots.txt and 404.html into dist/ after every production build.
const seoFiles = () => ({ name: 'seo-files', apply: 'build', closeBundle() { prerender() } })

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFiles()],
})
