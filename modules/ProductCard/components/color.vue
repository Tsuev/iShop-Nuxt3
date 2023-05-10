<template>
  <span class="color">
    <div class="color__circle"></div>
    Purple
  </span>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.color {
  @apply text-white font-medium px-1 flex flex-col justify-center items-center;

  &__circle {
    @apply w-[30px] h-[30px] bg-purple-600 border-2 border-white rounded-full;
  }
}
</style>
