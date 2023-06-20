<template>
  <label class="toggle" :class="class"> </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue"): string;
}>();
</script>

<style lang="scss" scoped>
.toggle {
}
</style>
