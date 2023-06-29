<template>
  <div class="user">
    <div @click="navigateToLk" class="user__logo">
      <avatarSvg />
    </div>
    <div class="user__name">
      {{ username }}
    </div>
    <div v-if="logoutShow" @click="logout" class="user__logout">
      <Icon class="text-red-500" name="ic:baseline-logout" />
      Выйти
    </div>
  </div>
  <!-- <drop-menu /> -->
</template>

<script setup lang="ts">
import DropMenu from "@/components/ui/drop-menu.vue";
import avatarSvg from "../assets/avatar.svg";
import { useAuthorizationStore } from "~/store/authorizationStore";
import { useSidebarStore } from "../../Sidebar/store/sidebarStore";

const authorizationStore = useAuthorizationStore();
const sidebarStore = useSidebarStore();
const router = useRouter();

function logout() {
  authorizationStore.logout();
  sidebarStore.closeSidebar();
}

function navigateToLk() {
  sidebarStore.closeSidebar();
  router.push("/lk");
}

defineProps<{
  username?: string;
  logoutShow?: boolean;
}>();
</script>

<style lang="scss" scoped>
.user {
  @apply flex flex-col justify-center items-center;

  &__logo {
    @apply rounded-full bg-gradient-to-r from-sky-600 from-60% to-blue-500;
    @apply h-[40px] w-[40px] flex justify-center items-end cursor-pointer mb-1;
  }

  &__name {
    @apply font-bold text-xl;
  }

  &__logout {
    @apply font-bold text-red-500 flex items-center gap-1;
  }
}
</style>
