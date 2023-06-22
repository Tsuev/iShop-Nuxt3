<template>
  <div @click.self="store.closeModal" class="modal">
    <div class="modal__content" :class="{ modal__fullscreen: fullscreen }">
      <div class="modal__header">
        <CloseIcon @click="store.closeModal" />
      </div>
      <component v-if="dynamicComponent" :is="dynamicComponent" />
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/img/icons/close.svg";
import { useModalStore } from "./store/modalStore";
import { storeToRefs } from "pinia";

const props = defineProps<{
  fullscreen?: boolean;
}>();

const store = useModalStore();
const { modalType } = storeToRefs(store);
const dynamicComponent: Ref<Component | null> = shallowRef(null);

dynamicComponent.value = defineAsyncComponent(
  () => import(`./components/${modalType.value}.vue`)
);
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center top-0;
  .modal__content {
    @apply bg-white rounded-md p-3;
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
