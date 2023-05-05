<template>
  <div class="user">
    <avatarSvg />
  </div>
</template>

<script setup lang="ts">
import avatarSvg from "../assets/avatar.svg";
</script>

<style lang="scss" scoped>
.user {
  @apply rounded-full bg-gradient-to-r from-sky-600 from-60% to-blue-500;
  @apply h-[50px] w-[50px] flex justify-center items-end cursor-pointer;
}
</style>
