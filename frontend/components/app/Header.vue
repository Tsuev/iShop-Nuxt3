<template>
  <div class="header">
    <UButton @click="toggleDark">Button</UButton>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
