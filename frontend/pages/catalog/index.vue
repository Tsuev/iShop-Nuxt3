<template>
  <div class="catalog">
    <!-- <div class="brearcrubms">Главная/смартфоны</div> -->
    <div class="catalog__filter">
      <div class="filter__title">Фильтры</div>
      <div class="filter__items"></div>
    </div>
    <div class="catalog__products">
      <div class="catalog__title">IPhone 14 Pro Max</div>
      <div class="catalog__items">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/modules/ProductCard/ProductCard.vue";
</script>

<style lang="scss" scoped>
.catalog {
  @apply grid grid-cols-12 gap-4 pt-5;

  &__filter {
    @apply col-span-2;
    .filter__title {
      @apply text-xl font-bold mb-3;
    }
    .filter__items {
      @apply bg-gray-100 rounded-lg w-full h-full;
    }
  }
  &__products {
    @apply col-span-10;
    .catalog__title {
      @apply text-4xl font-bold mb-3;
    }
    .catalog__items {
      @apply flex gap-2 md:gap-5 overflow-x-auto flex-nowrap sm:overflow-x-hidden sm:flex-wrap;
    }
  }
}
</style>
