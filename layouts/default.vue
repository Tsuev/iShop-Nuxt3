<template>
  <Header />

  <div class="default">
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from "~/modules/Header/Header.vue";
</script>

<style lang="scss" scoped>
.default {
  @apply max-w-7xl mx-auto px-1;
}
</style>
