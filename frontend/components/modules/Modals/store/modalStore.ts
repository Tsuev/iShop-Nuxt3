import { defineStore } from 'pinia'

const useModalStore =  defineStore('modal', () => {
  const modalState: Ref<boolean> = ref(false)
  const modalType: Ref<string> = ref('')

  function openModal(type: string): void {
    document.body.style.overflowY = "hidden"
    modalType.value = type
    modalState.value = true
  }

  function closeModal() {
    modalState.value = false;
    document.body.style.overflowY = "visible";
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