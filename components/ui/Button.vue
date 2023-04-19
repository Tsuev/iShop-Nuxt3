<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.button {
  @apply bg-gradient-to-r from-green-600 from-60% to-blue-500;
  @apply text-white font-bold text-base mx-2 px-2 py-1;
  @apply rounded;
}
</style>