<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
</script>

<template>
  <VueFinalModal
    :overlay-transition="'vfm-fade'"
    :content-transition="'vfm-fade'"
    class="flex justify-center items-center"
    content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"
  >
    <slot />
  </VueFinalModal>
</template>
