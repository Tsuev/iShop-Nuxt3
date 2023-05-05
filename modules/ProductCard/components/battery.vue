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
  @apply text-lg text-white font-bold h-full;

  .battery {
    @apply rounded w-[35px] h-[20px] p-[2px] relative border-white border-[1px];
    &:after {
      content: "";
      @apply block absolute right-[-16%] bottom-[15%] bg-white h-[10px] w-[1px];
    }

    &__state {
      @apply w-[100%] h-full bg-green-600;
    }
  }
}
</style>
