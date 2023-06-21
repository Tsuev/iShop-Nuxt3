import { useAuthorizationStore } from "~/store/authorizationStore"
const store = useAuthorizationStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (true) {
    return navigateTo('/')
  }
})