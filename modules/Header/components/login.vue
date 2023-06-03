<template>
  <div class="login">
    <div class="login__desktop">
      <Button>Войти</Button>
      <Button>Регистрация</Button>
    </div>
    <div class="login__mobile">
      <User />
    </div>
  </div>
</template>

<script setup lang="ts">
import User from "./user.vue";
import Button from "@/components/ui/button.vue";
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
