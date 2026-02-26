import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import Sitemap from 'vite-plugin-sitemap'

const siteUrl = 'https://momsmagicpot.com'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    Sitemap({
      hostname: siteUrl,
      dynamicRoutes: ['/', '/#menu', '/#offers', '/#about'],
      generateRobotsTxt: false,
      readable: true,
      changefreq: 'weekly',
      priority: {
        '/': 1,
      },
    }),
  ],
  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
