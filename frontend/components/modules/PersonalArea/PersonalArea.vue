<template>
  <div class="personal-area">
    <div class="personal-area__nav personal-area__block">
      <personalAreaNavigation />
    </div>
    <div class="personal-area__content personal-area__block"></div>
  </div>
</template>

<script setup lang="ts">
import personalAreaNavigation from "./components/personal-area-navigation.vue";
</script>

<style lang="scss" scoped>
.personal-area {
  @apply grid grid-cols-12 gap-4 pt-5 h-screen;

  &__nav {
    @apply col-span-2;
  }

  &__content {
    @apply col-span-10;
  }

  &__block {
    @apply rounded-lg h-full bg-white p-5;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.09);
  }
}
</style>
