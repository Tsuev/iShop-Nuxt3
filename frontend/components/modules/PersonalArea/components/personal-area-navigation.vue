<template>
  <div
    v-if="access.includes(authorizationStore.user.role)"
    class="pesonal-area-navigation"
    :class="[
      personalAreaStore.activeLkComponent === component
        ? 'text-sky-600'
        : 'text-gray-500',
    ]"
    @click="$emit('changeComponent', component)"
  >
    <Icon size="30" :name="icon" />
    <div class="pesonal-area-navigation__title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalAreaStore } from "../store/personalAreaStore";
import { useAuthorizationStore } from "~/store/authorizationStore";

const personalAreaStore = usePersonalAreaStore();
const authorizationStore = useAuthorizationStore();
defineProps<{
  title: string;
  icon: string;
  active: boolean;
  component: string;
  access: string[];
}>();
</script>

<style lang="scss" scoped>
.pesonal-area-navigation {
  @apply flex items-center gap-2 text-lg cursor-pointer;

  &__title {
    @apply hidden lg:block;
  }
}
</style>
