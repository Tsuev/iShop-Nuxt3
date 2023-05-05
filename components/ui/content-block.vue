<template>
  <div class="block">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.block {
  @apply rounded-lg shadow-sm overflow-hidden h-[200px];
}
</style>
