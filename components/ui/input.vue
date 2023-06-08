<template>
  <div class="custom_input">
    <label class="label">{{ label }}</label>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :required="required"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
export interface Input {
  label: string;
  placeholder: string;
  modelValue: string;
  type: string;
  required: boolean;
}

withDefaults(defineProps<Input>(), {
  label: "",
  placeholder: "Введите текст...",
  modelValue: "",
  type: "text",
  required: false,
});

const emit = defineEmits<{
  (e: "update:modelValue"): string;
}>();
</script>

<style lang="scss">
.custom_input {
  @apply mb-3;
  .label {
    @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
  }

  .input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5;
    @apply focus-within:border-blue-600;
    @apply outline-none;
  }
}
</style>
