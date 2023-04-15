<template>
  <div class="header">
    <burger />
    <logo />
    <user />
  </div>
</template>

<script setup lang='ts'>
import burger from './components/burger.vue'
import logo from './components/logo.vue'
import user from './components/user.vue'
</script>

<style lang='scss' scoped>
.header {
  @apply py-2 flex justify-between items-center;
}
</style>