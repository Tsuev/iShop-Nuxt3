<template>
  <div class="burger">
    <burgerSvg />
    <span class="burger__title">
      Каталог
    </span>
  </div>
</template>

<script setup lang='ts'>
import burgerSvg from '../assets/burger.svg'
</script>

<style lang='scss' scoped>
.burger {
  @apply px-3 py-1 bg-gradient-to-r from-cyan-600 from-50% to-blue-500;
  @apply flex items-center rounded cursor-pointer;

  &__title {
    @apply text-white font-bold text-lg ml-3
  }
}
</style>