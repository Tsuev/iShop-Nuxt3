<template>
  <div class="accumulator">
    <div class="battery">
      <div class="battery__state"></div>
    </div>
    100%
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.accumulator {
  @apply text-sm lg:text-lg text-white font-medium h-full;

  .battery {
    @apply rounded-sm w-[15px] h-[10px];
    @apply lg:rounded lg:w-[35px] lg:h-[20px] lg:p-[2px] relative border-white border-[1px];
    &:after {
      content: "";
      @apply right-[-10%] bottom-[15%] h-[5px];
      @apply block absolute lg:right-[-16%] lg:bottom-[15%] lg:h-[10px] w-[1px] bg-white;
    }

    &__state {
      @apply w-full h-full bg-green-600;
    }
  }
}
</style>
