<template>
  <Header />
  <div class="default">
    <slot />
  </div>
  <MobileNav />
</template>

<script setup lang="ts">
import Header from "@/components/modules/Header/Header.vue";
import MobileNav from "~/components/blocks/mobile-nav.vue";
</script>

<style lang="scss" scoped>
.default {
  @apply max-w-7xl mx-auto px-1 pb-24 lg:pb-0;
}
</style>
