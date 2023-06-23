<template>
  <div @click="$router.push('/lk')" class="user">
    <div class="user__logo">
      <avatarSvg />
    </div>
    <div class="user__name">
      {{ username }}
    </div>
  </div>
  <!-- <drop-menu /> -->
</template>

<script setup lang="ts">
import DropMenu from "@/components/ui/drop-menu.vue";
import avatarSvg from "../assets/avatar.svg";

defineProps<{
  username?: string;
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
    @apply font-bold;
  }
}
</style>
