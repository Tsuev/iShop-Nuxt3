<template>
  <div class="login">
    <div class="login__desktop">
      <Button>Войти</Button>
      <Button>Регистрация</Button>
    </div>
    <div class="login__mobile">
      <user />
    </div>
  </div>
</template>

<script setup lang="ts">
import user from "./user.vue";
import Button from "@/components/ui/Button.vue";
</script>

<style lang="scss" scoped>
.login {
  &__desktop {
    @apply hidden md:block;
  }
  &__mobile {
    @apply block md:hidden;
  }
}
</style>
