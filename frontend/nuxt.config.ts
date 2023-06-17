// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'


export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/extends.scss',
    'vue3-carousel/dist/carousel.css',
    'vue-final-modal/style.css',
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  vite: {
    plugins: [
      svgLoader()
    ],
    css: {
      preprocessorOptions: {
          sass: {
              additionalData: '@import "@/assets/scss/extends.scss"',
          },
      },
    },
  },
  app: {
    head: {
      title: 'iShopPhone',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
