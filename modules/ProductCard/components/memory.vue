<template>
  <div class="memory">
    <DataBaseIcon />
    128GB
  </div>
</template>

<script setup lang="ts">
import DataBaseIcon from "../assets/img/database-icon.svg";
</script>

<style lang="scss" scoped>
.memory {
  @apply text-lg text-white font-medium flex flex-col items-center;
}
</style>
