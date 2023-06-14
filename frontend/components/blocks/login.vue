<template>
  <div class="login">
    <Button @click="$emit('login', 'login-modal')">Войти</Button>
    <Button @click="$emit('regist', 'registration-modal')">Регистрация</Button>
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
  @apply flex gap-1 my-2 lg:my-0;
}
</style>
