<template>
  <div class="characteristic">
    <div class="characteristic__title">{{ title }}</div>
    <div class="characteristic__value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string;
  value: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "неизвестно",
  value: "неизвестно",
});
</script>

<style lang="scss" scoped>
.characteristic {
  @apply w-full flex justify-between text-gray-400 text-xs sm:text-base;
}
</style>
