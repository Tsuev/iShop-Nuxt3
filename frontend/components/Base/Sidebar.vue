<template>
  <div>
    <div
      ref="sidebar"
      class="sidebar"
      :class="{ 'sidebar--active': sidebarState }"
    >
      <div class="sidebar__header">
        <CloseIcon @click="sidebaStore.closeSidebar" />
      </div>
      <div class="sidebar__content">
        <!-- <User
          v-if="authorizationStore.isAuth"
          :username="user.name"
          :logout-show="true"
        /> -->
        <BaseLogin />
        <component v-if="dynamicComponent" :is="dynamicComponent" />
        <slot />
      </div>
    </div>
    <div v-if="sidebarState" class="sidebar-bg"></div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/img/icons/close.svg";
import { storeToRefs } from "pinia";
import { onClickOutside } from "@vueuse/core";

const sidebar = ref(null);
const sidebaStore = useSidebarStore();
const authorizationStore = useAuthorizationStore();
const { sidebarState, sidebarType } = storeToRefs(sidebaStore);
const { user } = storeToRefs(authorizationStore);
const dynamicComponent: Ref<Component | null> = shallowRef(null);

if (sidebarType.value) {
  dynamicComponent.value = defineAsyncComponent(
    () => import(`./components/${sidebarType.value}.vue`)
  );
}
onClickOutside(sidebar, () => sidebaStore.closeSidebar());
</script>

<style lang="scss" scoped>
.sidebar-bg {
  @apply absolute z-[45] opacity-40 bg-black w-full h-full;
}
.sidebar {
  @apply fixed w-1/2 h-[calc(100%-60px)] bg-white z-50 top-0 block lg:hidden p-3;
  transform: translateX(200%);
  transition-duration: 0.3s;

  &__header {
    svg {
      @apply ml-auto;
    }
  }
}

.sidebar--active {
  transform: translateX(100%);
  transition-duration: 0.3s;
}
</style>
../../../store/sidebarStore
