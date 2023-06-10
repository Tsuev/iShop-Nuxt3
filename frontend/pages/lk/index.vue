<template>
  <div class="lk">
    <div class="lk__nav lk__block"></div>
    <div class="lk__content lk__block"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.lk {
  @apply grid grid-cols-12 gap-4 pt-5 h-screen;

  &__nav {
    @apply col-span-3;
  }

  &__content {
    @apply col-span-9;
  }

  &__block {
    @apply rounded-lg h-full bg-white p-5;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.09);
  }
}
</style>
