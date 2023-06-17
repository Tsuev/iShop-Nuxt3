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
          <Characteristic title="Память" value="128GB" />
          <Characteristic title="Батарея" value="100%" />
          <Characteristic title="Состояние" value="Отличное" />
          <Characteristic title="Цвет" value="Фиолетовый" />
          <Characteristic title="Продавец" value="Мансур" />
        </div>
        <div class="product__company"></div>
        <div class="product__price">100 000 ₽</div>
        <!-- <div class="product__brand">
          <img src="@/assets/img/apple-logo.png" alt="" />
        </div> -->
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import Characteristic from "./components/characteristic.vue";

// import Battery from "./components/battery.vue";
// import Memory from "./components/memory.vue";
// import Color from "./components/color.vue";
</script>

<style lang="scss" scoped>
.product {
  @apply rounded-lg p-3 relative overflow-hidden flex flex-col w-full;
  @apply bg-gradient-to-r from-slate-900 to-black text-white;
  @apply min-w-[170px];
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
      @apply text-sm lg:text-2xl font-medium text-center mb-2;
    }
  }

  &__characteristics {
    @apply flex flex-col mb-5 mt-3;
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
    @apply px-2 text-lg font-bold;
    @apply rounded-tl-lg text-sm lg:text-xl;
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
