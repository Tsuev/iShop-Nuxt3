<template>
  <div @click.self="modalStore.closeModal(resetAuthError)" class="modal">
    <div class="modal__content" :class="{ modal__fullscreen: fullscreen }">
      <div class="modal__header">
        <CloseIcon @click="modalStore.closeModal(resetAuthError)" />
      </div>
      <component v-if="dynamicComponent" :is="dynamicComponent" />
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/img/icons/close.svg";
import { useModalStore } from "./store/modalStore";
import { useAuthorizationStore } from "@/store/authorizationStore";
import { storeToRefs } from "pinia";

const props = defineProps<{
  fullscreen?: boolean;
}>();

const dynamicComponent: Ref<Component | null> = shallowRef(null);
const modalStore = useModalStore();
const authorizationStore = useAuthorizationStore();
const { modalType } = storeToRefs(modalStore);

const resetAuthError = () => (authorizationStore.authError = null);

if (modalType.value) {
  dynamicComponent.value = defineAsyncComponent(
    () => import(`./components/${modalType.value}.vue`)
  );
}
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center top-0;
  .modal__content {
    @apply bg-white rounded-md p-3 w-[355px];
    .modal__header {
      @apply w-full;
      svg {
        @apply ml-auto;
      }
    }
  }
  .modal__fullscreen {
    @apply w-screen h-screen;
  }
}
</style>
