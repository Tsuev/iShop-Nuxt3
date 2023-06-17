<template>
  <div @click.self="$emit('close', false)" class="modal">
    <div class="modal__content" :class="{ modal__fullscreen: fullscreen }">
      <div class="modal__header">
        <CloseIcon @click="$emit('close', false)" />
      </div>
      <component v-if="dynamicComponent" :is="dynamicComponent" />
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/img/icons/close.svg";

const { modalType } = defineProps<{
  modalType: string;
  fullscreen?: boolean;
}>();

const dynamicComponent: Ref<Component | null> = shallowRef(null);
dynamicComponent.value = defineAsyncComponent(
  () => import(`./components/${modalType}.vue`)
);

defineEmits<{
  (e: "close"): void;
}>();
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center;
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
