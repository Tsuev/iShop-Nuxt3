<template>
  <label class="toggle">
    <input
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      type="checkbox"
      hidden
    />
    <div class="toggle__wrapper">
      <div class="toggle__circle"></div>
    </div>
    <span class="toggle__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue"): string;
}>();
</script>

<style lang="scss" scoped>
.toggle {
  @apply cursor-pointer flex inline-block;
  .toggle__label {
    @apply ml-2;
  }
  .toggle__wrapper {
    @apply w-[40px] h-[23px] bg-gray-600 rounded-full flex items-center;
  }
  .toggle__circle {
    @apply rounded-full w-[19px] h-[19px] bg-white;
    transform: translateX(10%);
    transition-duration: 0.1s;
  }

  input:checked + .toggle__wrapper {
    @apply bg-sky-600;
    .toggle__circle {
      transform: translateX(100%);
      transition-duration: 0.1s;
    }
  }
}
</style>
