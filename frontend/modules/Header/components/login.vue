<template>
  <div class="login">
    <div class="login__desktop">
      <Button @click="$emit('login', 'login-modal')">Войти</Button>
      <Button @click="$emit('regist', 'registration-modal')"
        >Регистрация</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button.vue";

defineEmits<{
  (e: "login"): void;
  (e: "regist"): void;
}>();
</script>

<style lang="scss" scoped>
.login {
  &__desktop {
    @apply flex gap-1;
  }
}
</style>
