<template>
  <AppHeader />
  <div class="default">
    <slot />
  </div>
  <AppMobileNav />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.default {
  @apply max-w-7xl mx-auto px-1 pb-24 lg:pb-0;
}
</style>
