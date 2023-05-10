<template>
  <NuxtLink :to="'/'">
    <div class="product">
      <div
        class="product__img"
        :style="{ backgroundImage: `url(${'/iphone.png'})` }"
      ></div>
      <div class="product__content">
        <div class="product__title">iPhone 14 Pro Max</div>
        <div class="product__characteristics">
          <battery />
          <memory />
          <color />
        </div>
        <div class="product__company">
          <div class="company__logo">
            <img src="./assets/img/test-company.png" alt="" />
          </div>
        </div>
        <div class="product__price">100 000 ₽</div>
        <!-- <div class="product__brand">
          <img src="@/assets/img/apple-logo.png" alt="" />
        </div> -->
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import Battery from "./components/battery.vue";
import Memory from "./components/memory.vue";
import Color from "./components/color.vue";
</script>

<style lang="scss" scoped>
.product {
  @apply rounded-lg p-4 relative overflow-hidden flex flex-col w-full;
  @apply bg-gradient-to-r from-slate-900 to-black;
  transition-duration: 0.3s;

  &:hover {
    transition-duration: 0.3s;
  }
  &__img {
    @apply bg-center bg-no-repeat bg-contain;
    @apply h-[100px] lg:h-[200px]  w-full mb-2;
  }

  &__content {
    .product__title {
      @apply text-sm lg:text-2xl font-medium text-white text-center mb-2;
    }
  }

  &__characteristics {
    @apply flex items-center justify-between mb-7 mt-3;
  }

  &__brand {
    @apply h-full;
    img {
      @apply w-[30px] mx-auto;
    }
  }

  &__price {
    @apply absolute right-0 bottom-0;
    @apply bg-gradient-to-r from-sky-700 to-blue-700;
    @apply px-2 text-white text-lg font-bold;
    @apply rounded-tl-lg;
  }

  &__company {
    @apply flex;
    .company__logo {
      @apply w-[25%] rounded mb-8;
    }

    img {
      @apply w-[50px];
    }
  }
}
</style>
