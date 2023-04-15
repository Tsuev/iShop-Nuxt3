<template>
  <NuxtLink to="/" class="logo">
    <logoSvg />
    <span class="logo__title">iShopPhone</span>
  </NuxtLink>
</template>

<script setup lang='ts'>
import logoSvg from '../assets/logo.svg'
</script>

<style lang='scss' scoped>
.logo {
  @apply flex flex-col items-center;

  &__title {
    @apply font-bold text-xl
  }
}
</style>