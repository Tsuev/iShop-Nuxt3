<template>
  <header class="header">
    <div class="header__wrapper">
      <NuxtLink to="/" class="logo">
        <LogoSvg />
        <span class="logo__title">iShop</span>
      </NuxtLink>
      <Navigation />
      <div class="logo__title">
        <div class="title">iShop</div>
        <span class="subtitle flex">
          Все смартфоны iPhone ЧР
          <!-- <img src="./assets/chechen.png" alt="" /> -->
        </span>
      </div>
      <div class="header__desktop">
        <div v-if="false" class="user">
          <div @click="navigateToLk" class="user__logo">
            <avatarSvg />
          </div>
          <div class="user__name">
            {{ "username" }}
          </div>
          <div class="user__logout">
            <Icon class="text-red-500" name="ic:baseline-logout" />
            Выйти
          </div>
        </div>
        <BaseLogin v-else />
      </div>

      <div class="header__mobile">
        <div @click="sidebarStore.openSidebar('')" class="burger">
          <BurgerSvg />
          <span class="burger__title"> Каталог </span>
        </div>
        <Teleport to="body">
          <Transition>
            <BaseSidebar />
          </Transition>
        </Teleport>
      </div>
    </div>
    <Teleport to="body">
      <Transition>
        <AuthorizationModal v-if="modalState" />
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import LogoSvg from "../../assets/img/header/logo.svg";
import AvatarSvg from "../../assets/img/header/avatar.svg";
import BurgerSvg from "../../assets/img/header/burger.svg";

import { storeToRefs } from "pinia";
import { useSidebarStore } from "@/store/sidebarStore";
import { useAuthorizationStore } from "@/store/authorizationStore";
import { useModalStore } from "@/components/modules/Modals/store/modalStore";

const router = useRouter();
const modalStore = useModalStore();
const sidebarStore = useSidebarStore();
const authorizationStore = useAuthorizationStore();

const { modalState } = storeToRefs(modalStore);
const { sidebarState } = storeToRefs(sidebarStore);

onMounted(() => {
  authorizationStore.initAuthorization();
});

function logout() {
  authorizationStore.logout();
  sidebarStore.closeSidebar();
}

function navigateToLk() {
  sidebarStore.closeSidebar();
  router.push("/lk");
}
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-center px-2 lg:px-1 sticky top-0 z-40;

  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);

  &__wrapper {
    @apply py-2 flex justify-between items-center max-w-7xl w-full gap-1;
    .logo__title {
      @apply block lg:hidden text-center;
      .title {
        @apply text-xl font-bold;
      }
      .subtitle {
        @apply text-sm;
      }
    }
    .header__desktop {
      @apply hidden lg:block;
    }
    .header__mobile {
      @apply block lg:hidden;
    }
  }
}

.logo {
  @apply flex items-end;

  &__title {
    @apply hidden lg:inline-block font-extrabold text-2xl ml-2;
  }
}

nav {
  @apply gap-5 font-medium text-lg hidden lg:flex;
  a {
    @apply px-2 rounded-md;
  }
  .router-link-exact-active {
    @apply bg-cyan-600 text-white;
  }
}

.burger {
  @apply px-3 py-1 bg-gradient-to-r from-cyan-600 from-50% to-blue-500;
  @apply flex items-center rounded cursor-pointer;

  &__title {
    @apply text-white font-bold text-lg ml-3;
  }
}

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
