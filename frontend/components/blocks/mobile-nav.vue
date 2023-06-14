<template>
  <div class="mobile-nav">
    <NuxtLink v-for="item in NavData" :key="item.id" :to="item.link">
      <Icon color="#a7a7a7" size="28" :name="item.icon" />
      <span class="mobile-nav__title">{{ item.shortTitle }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import NavData from "@/constants/navigation";
</script>

<style lang="scss" scoped>
.mobile-nav {
  @apply flex justify-around lg:hidden w-full fixed bottom-0 p-2 overflow-hidden bg-zinc-900 rounded-t-lg;

  a {
    @apply flex flex-col justify-center items-center;
  }

  &__title {
    @apply text-xs;
    color: #a7a7a7;
  }
}

.router-link-exact-active {
  .icon,
  .mobile-nav__title {
    color: #0084c5 !important;
  }
}
</style>
