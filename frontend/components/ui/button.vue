<template>
  <button class="button" :class="buttonType">
    <Icon v-if="icon" color="#0284c7" size="20" :name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface buttonType {
  buttonType?: "default" | "transparent";
  icon?: string;
}
withDefaults(defineProps<buttonType>(), {
  buttonType: "default",
  icon: "",
});
</script>

<style lang="scss" scoped>
.button {
  @apply transition-all w-full;
  @apply text-white font-bold text-base px-2 py-1;
  @apply rounded;
  @apply flex justify-center items-center gap-1;
}

.default {
  @apply text-white bg-sky-600 hover:bg-sky-700;
}

.transparent {
  @apply text-sky-600 bg-white border border-sky-600 hover:text-sky-700;
}
</style>
