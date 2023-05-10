<template>
  <div class="header">
    <div class="header__wrapper">
      <logo />

      <component :is="false ? user : login" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "./components/logo.vue";
import user from "./components/user.vue";
import login from "./components/login.vue";
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-center px-1 sticky top-0 z-50;

  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);

  &__wrapper {
    @apply py-2 flex justify-between items-center max-w-7xl w-full;
  }
}
</style>
