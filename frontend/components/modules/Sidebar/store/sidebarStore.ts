import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const sidebarState: Ref<boolean> = ref(false)
  const sidebarType: Ref<string> = ref('')

  function openSidebar(type: string, callback?: () => void): void {
    document.body.style.overflowY = "hidden"
    sidebarState.value = true
    sidebarType.value = type

    if (callback) callback()
  }
  
  function closeSidebar() {
    sidebarState.value = false;
    document.body.style.overflowY = "visible";
  }

  return {
    sidebarState,
    sidebarType,
    openSidebar,
    closeSidebar
  }
})