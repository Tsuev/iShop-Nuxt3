// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // 'vue-ssr-carousel/nuxt'
  ],
  dir: {
    modules: 'modules_not_scanned'
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  vite: {
    plugins: [
      svgLoader()
    ]
  },
  app: {
    head: {
      title: 'iShopPhone',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
