<template>
  <div class="carousel">
    <Carousel :wrapAround="true" :items-to-show="1" :autoplay="50000">
      <Slide v-for="slide in 3" :key="slide">
        <div
          class="carousel__item"
          :style="{ backgroundImage: `url(${'/fix-smartphone.jpeg'})` }"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
          labore.
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<style lang="scss">
.carousel {
  &__item {
    @apply bg-gradient-to-r from-cyan-600 from-50% to-blue-500 h-[300px] w-[100%] rounded-xl mx-1;
    @apply bg-center bg-no-repeat bg-cover;
    @apply flex items-end text-2xl font-bold text-white text-left;
    @apply pl-11 pb-7;

    -webkit-box-shadow: 0px -89px 27px -10px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px -89px 27px -10px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px -70px 27px -10px rgba(0, 0, 0, 0.7) inset;
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  @apply bg-cyan-600;
}
</style>
