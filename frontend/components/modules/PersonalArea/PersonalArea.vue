<template>
  <div class="personal-area">
    <div class="personal-area__nav personal-area__block">
      <personalAreaNavigation
        v-for="item in personalAreaStore.lkNavData"
        :title="item.title"
        :icon="item.icon"
        :active="item.active"
        :component="item.component"
        :access="item.access"
        @changeComponent="changeComponent"
      />
    </div>

    <div class="personal-area__content personal-area__block">
      <component :is="dynamicComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import personalAreaNavigation from "./components/personal-area-navigation.vue";
import { usePersonalAreaStore } from "./store/personalAreaStore";

const personalAreaStore = usePersonalAreaStore();
const dynamicComponent: Ref<Component | null> = shallowRef(null);

dynamicComponent.value = defineAsyncComponent(
  () => import(`./components/${personalAreaStore.activeLkComponent}.vue`)
);

function changeComponent(component: string) {
  personalAreaStore.activeLkComponent = component;
  dynamicComponent.value = defineAsyncComponent(
    () => import(`./components/${component}.vue`)
  );
}
</script>

<style lang="scss">
.personal-area {
  @apply grid grid-cols-12 gap-4 pt-5;

  &__nav {
    @apply col-span-12 lg:col-span-3;
    @apply flex flex-row lg:flex-col gap-5 lg:gap-1 justify-center lg:justify-start;
    @apply p-3 lg:p-5;
  }

  &__title {
    @apply text-2xl font-bold mb-5;
  }

  &__content {
    @apply col-span-12 lg:col-span-9 p-5;
  }

  &__block {
    @apply rounded-lg h-full bg-white;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.09);
  }
}
</style>
