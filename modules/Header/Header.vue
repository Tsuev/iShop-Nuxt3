<template>
  <div class="header">
    <div class="header__wrapper">
      <logo />

      <user v-if="true" @click="() => open()" />
      <login v-else />
    </div>

    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from "vue-final-modal";

import logo from "./components/logo.vue";
import user from "./components/user.vue";
import login from "./components/login.vue";
import MyModal from "@/components/block/my-modal.vue";

const { open, close } = useModal({
  component: MyModal,
});
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
