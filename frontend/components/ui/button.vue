<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  @apply bg-sky-600 hover:bg-sky-700 transition-all w-full;
  @apply text-white font-bold text-base px-2 py-1;
  @apply rounded;
}
</style>
