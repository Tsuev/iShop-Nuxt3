<template>
  <div class="sidebar">
    <div class="sidebar__content"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar {
  @apply fixed w-full h-full bg-black bg-opacity-40 z-50 top-0;
  &__content {
    @apply w-full h-full bg-white;
    transform: translateX(100%);
  }
}
</style>
