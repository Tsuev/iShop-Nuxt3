import { vMaska } from 'maska'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', vMaska)
})