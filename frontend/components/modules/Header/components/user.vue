<template>
  <div @click="$router.push('/lk')" class="user">
    <avatarSvg />
  </div>
  <!-- <drop-menu /> -->
</template>

<script setup lang="ts">
import DropMenu from "@/components/ui/drop-menu.vue";
import avatarSvg from "../assets/avatar.svg";
</script>

<style lang="scss" scoped>
.user {
  @apply rounded-full bg-gradient-to-r from-sky-600 from-60% to-blue-500;
  @apply h-[40px] w-[40px] flex justify-center items-end cursor-pointer;
}
</style>
