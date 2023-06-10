<template>
  <div class="header">
    <div class="header__wrapper">
      <logo />
      <Navigation />

      <div class="header__desktop">
        <user v-if="false" />
        <login @login="openModal" @regist="openModal" v-else />
      </div>

      <div class="header__mobile">
        <burger class="hidden" />
      </div>
    </div>
    <Teleport to="body">
      <Transition>
        <LoginModal
          v-if="modalState"
          @close="closeModal"
          :modalType="modalType"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import LoginModal from "@/components/modules/Modals/Modal.vue";
import logo from "./components/logo.vue";
import user from "./components/user.vue";
import login from "./components/login.vue";
import burger from "./assets/burger.svg";
import Navigation from "./components/nav.vue";

const modalState = ref(false);
const modalType = ref("");
const closeModal = () => (modalState.value = false);

const openModal = (type: any): void => {
  modalState.value = true;
  modalType.value = type;
};
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-center px-1 sticky top-0 z-40;

  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);

  &__wrapper {
    @apply py-2 flex justify-between items-center max-w-7xl w-full;

    .header__desktop {
      @apply hidden lg:block;
    }
    .header__mobile {
      @apply block lg:hidden;
    }
  }
}
</style>
