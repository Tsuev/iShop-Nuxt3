<template>
  <header class="header">
    <div class="header__wrapper">
      <logo />
      <Navigation />

      <div class="header__desktop">
        <user v-if="false" />
        <login @login="openModal" @regist="openModal" v-else />
      </div>

      <div class="header__mobile">
        <burger @click="openSidebar" />
        <Teleport to="body">
          <Transition>
            <Sidebar @close="closeSidebar" :isOpen="sidebarState" />
          </Transition>
        </Teleport>
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
  </header>
</template>

<script setup lang="ts">
import LoginModal from "@/components/modules/Modals/Modal.vue";
import logo from "./components/logo.vue";
import user from "./components/user.vue";
import login from "@/components/blocks/login.vue";
import burger from "./assets/burger.svg";
import Navigation from "./components/nav.vue";
import Sidebar from "@/components/modules/Sidebar/Sidebar.vue";
import { getUsers } from "./api";

const foo = ref(getUsers());

console.log(foo.value);

const modalState = ref(false);
const modalType = ref("");
const sidebarState = ref(false);

const openSidebar = () => (sidebarState.value = true);
const closeSidebar = () => (sidebarState.value = false);

const closeModal = () => {
  modalState.value = false;
  document.body.style.overflowY = "visible";
};

const openModal = (type: any): void => {
  modalState.value = true;
  modalType.value = type;
  document.body.style.overflowY = "hidden";
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
