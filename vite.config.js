import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    host:'0.0.0.0',
    port:5173,
  },
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Split heavy libraries into cacheable vendor chunks.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils'))
            return 'motion'
          if (id.includes('gsap') || id.includes('lenis')) return 'gsap'
          if (id.includes('swiper') || id.includes('ssr-window') || id.includes('dom7'))
            return 'swiper'
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform'))
            return 'form'
          if (id.includes('react-icons')) return 'icons'
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('react-router') ||
            id.includes('scheduler')
          )
            return 'react'
        },
      },
    },
  },
})
