import { defineStore } from 'pinia'

const useModalStore =  defineStore('modal', () => {
  const modalState: Ref<boolean> = ref(false)
  const modalType: Ref<string> = ref('')

  function openModal(type: string, callback?: () => void): void {
    document.body.style.overflowY = "hidden"
    modalType.value = type
    modalState.value = true

    if (callback) callback()
  }

  function closeModal(callback?: () => void) {
    modalState.value = false;
    document.body.style.overflowY = "visible";

    if (callback) callback()
  }

  return {
    modalState,
    modalType,
    openModal,
    closeModal
  }
})


export {
  useModalStore,
}