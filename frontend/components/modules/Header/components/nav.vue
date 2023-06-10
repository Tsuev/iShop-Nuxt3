<template>
  <nav>
    <NuxtLink to="/"> Главная </NuxtLink>
    <NuxtLink to="/catalog"> Смартфоны </NuxtLink>
    <NuxtLink to="/services"> Сервисы </NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
  @apply gap-5 font-medium text-lg hidden lg:flex;
  a {
    @apply px-2 rounded-md;
  }
  .router-link-exact-active {
    @apply bg-cyan-600 text-white;
  }
}
</style>
