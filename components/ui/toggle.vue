<template>
  <label class="toggle">
    <input type="checkbox" value="" />
    <div class=""></div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{
      label
    }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style lang="scss" scoped>
.toggle {
  @apply relative inline-flex items-center cursor-pointer;
  input {
    @apply sr-only peer;
  }
}
</style>
