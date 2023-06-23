import mask from 'vue-the-mask'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', mask)
})