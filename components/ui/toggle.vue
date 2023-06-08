<template>
  <label
    class="relative inline-flex items-center cursor-pointer"
    :class="class"
  >
    <input type="checkbox" value="" class="sr-only peer" checked />
    <div
      class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    ></div>
    <span class="ml-3 text-md font-medium text-gray-900 dark:text-gray-300">{{
      label
    }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  class?: string;
}>();
</script>

<style lang="scss" scoped>
// .toggle {
//   @apply relative inline-flex items-center cursor-pointer;
//   &__wrapper {
//     @apply w-11 h-6 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full dark:bg-gray-700 checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 checked:bg-blue-600;
//   }
//   &__label {
//     @apply ml-3 text-sm font-medium text-gray-900 dark:text-gray-300;
//   }
// }
</style>
