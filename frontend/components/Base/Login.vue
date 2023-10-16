<template>
  <div class="login">
    <Button @click="openModal('login-modal')">Войти</Button>
    <Button @click="openModal('registration-modal')">Регистрация</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button.vue";
import { useModalStore } from "@/components/modules/Modals/store/modalStore";
import { useSidebarStore } from "@/store/sidebarStore";

const modalStore = useModalStore();
const sidebarStore = useSidebarStore();

function openModal(modalType: string) {
  modalStore.openModal(modalType);
  sidebarStore.closeSidebar();
}
</script>

<style lang="scss" scoped>
.login {
  @apply flex gap-1 my-2 lg:my-0;
}
</style>
