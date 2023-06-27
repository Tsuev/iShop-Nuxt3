// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'


export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  pwa: {
    manifest: {
      name: 'iShop',
      short_name: 'iShop',
      
      icons: [
        {
          src: 'icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-57x57.png',
          sizes: '57x57',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-114x114.png',
          sizes: '114x114',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: 'icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: 'icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: 'icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: "module"
    }
  },
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
      title: 'iShop',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'viewport',
          content: `
            height=device-height, 
            width=device-width, initial-scale=1.0, 
            minimum-scale=1.0, maximum-scale=1.0, 
            user-scalable=no, target-densitydpi=device-dpi
          `
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  }
})
