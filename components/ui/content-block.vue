<template>
  <div class="block" :class="background">
    <slot />
  </div>
</template>

<script setup lang='ts'>
export interface Block {
  background?: string
}

const props = withDefaults(defineProps<Block>(), {
  background: 'bg-gradient-to-r from-green-600 to-blue-500'
})
</script>

<style lang='scss' scoped>
.block {
  @apply p-2 rounded-lg shadow-sm
}
</style>