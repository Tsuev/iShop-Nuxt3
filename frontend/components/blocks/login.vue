<template>
  <div class="login">
    <Button @click="store.openModal('login-modal')">Войти</Button>
    <Button @click="store.openModal('registration-modal')">Регистрация</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button.vue";
import { useModalStore } from "@/components/modules/Modals/store/modalStore";

const store = useModalStore();
</script>

<style lang="scss" scoped>
.login {
  @apply flex gap-1 my-2 lg:my-0;
}
</style>
