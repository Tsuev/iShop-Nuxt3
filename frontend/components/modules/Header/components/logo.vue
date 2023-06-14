<template>
  <NuxtLink to="/" class="logo">
    <logoSvg />
    <span class="logo__title">iShop</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import logoSvg from "../assets/logo.svg";
</script>

<style lang="scss" scoped>
.logo {
  @apply flex items-end;

  &__title {
    @apply font-extrabold text-2xl ml-2;
  }
}
</style>
