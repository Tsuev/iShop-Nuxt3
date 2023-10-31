<template>
  <div class="layout-default">
    <AppHeader />
    <div class="default-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-default {
  margin: 0 auto;
}
</style>
