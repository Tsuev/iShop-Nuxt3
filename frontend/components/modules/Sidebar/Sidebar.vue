<template>
  <div class="sidebar" :class="{ 'sidebar--active': isOpen }">
    <div class="sidebar__header">
      <CloseIcon @click="$emit('close', false)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/img/icons/close.svg";

withDefaults(defineProps<{ isOpen: boolean }>(), {
  isOpen: false,
});
defineEmits<{
  (e: "close"): void;
}>();
</script>

<style lang="scss" scoped>
.sidebar {
  @apply fixed w-full h-full bg-white z-50 top-0 block lg:hidden p-3;
  transform: translateX(100%);
  transition-duration: 0.3s;

  &__header {
    svg {
      @apply ml-auto;
    }
  }
}

.sidebar--active {
  transform: translateX(0);
  transition-duration: 0.3s;
}
</style>
