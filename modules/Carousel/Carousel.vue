<template>
  <div class="carousel">
    <Carousel :wrapAround="true" :items-to-show="1" :autoplay="5000">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item"></div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang='ts'>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
</script>

<style lang='scss'>
.carousel {
  &__item {
    @apply bg-gradient-to-r from-cyan-600 from-50% to-blue-500 h-[300px] w-[100%] rounded-xl mx-1
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  @apply bg-cyan-600
}
</style>