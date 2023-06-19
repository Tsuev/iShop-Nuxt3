<template>
  <div class="searchbar">
    <Icon color="#a7a7a7" size="25" name="ic:sharp-search" />
    <input class="searchbar__input" type="text" placeholder="Поиск..." />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.searchbar {
  @apply flex-1 h-7 flex items-center rounded-full border-gray-200 border px-2;
  &__input {
    @apply h-full text-xl focus-within:outline-none;
  }
}
</style>
