import { useAuthorizationStore } from "~/store/authorizationStore"
import { useSidebarStore } from "~/components/modules/Sidebar/store/sidebarStore";

const authorizationStore = useAuthorizationStore()
const sidebarStore = useSidebarStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/lk' && !authorizationStore.isAuth) {
    if (process.client) sidebarStore.openSidebar()
    return navigateTo('/');
  }
  console.log(to, from);
  
})