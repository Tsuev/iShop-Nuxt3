<template>
  <main class="main">
    <Carousel :wrapAround="true" :items-to-show="1" :autoplay="50000">
      <Slide v-for="slide in 3" :key="slide">
        <div
          class="carousel__item"
          :style="{ backgroundImage: `url(${'/fix-smartphone.jpeg'})` }"
        >
          Этот текст написан для того, чтобы заполнить пустое пространство на
          слайде.
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <section class="main__categories">
      <h2 class="main__categories__title">Категории</h2>
      <div class="main__categories__content">
        <content-block>
          <NuxtLink to="/catalog">
            <div
              class="block__content"
              :style="{ backgroundImage: `url(${'/smartphones.png'})` }"
            >
              Смартфоны
            </div>
          </NuxtLink>
        </content-block>

        <content-block>
          <NuxtLink to="/services">
            <div
              class="block__content"
              :style="{ backgroundImage: `url(${'/fix-iphone.png'})` }"
            >
              Ремонтные сервисы
            </div>
          </NuxtLink>
        </content-block>

        <content-block>
          <NuxtLink to="/services">
            <div
              class="block__content"
              :style="{ backgroundImage: `url(${'/fix-iphone.png'})` }"
            >
              Быстрые продажи
            </div>
          </NuxtLink>
        </content-block>

        <content-block>
          <NuxtLink to="/services">
            <div
              class="block__content"
              :style="{ backgroundImage: `url(${'/fix-iphone.png'})` }"
            >
              IPhone под заказ
            </div>
          </NuxtLink>
        </content-block>
      </div>
    </section>

    <section class="main__compilation">
      <h2 class="main__compilation__title">Лучший выбор</h2>
      <div class="main__compilation__products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import ContentBlock from "@/components/ui/content-block.vue";
import ProductCard from "@/components/modules/ProductCard/ProductCard.vue";
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  @apply bg-white rounded-full shadow-lg border border-black;
}
.carousel__prev {
  @apply left-[-20px];
}
.carousel__next {
  @apply right-[-20px];
}
</style>

<style lang="scss" scoped>
.main {
  @apply pt-5;
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

  h2 {
    @apply text-2xl font-bold mt-10 mb-5;
  }

  &__categories {
    @apply mt-10;

    &__content {
      @apply grid grid-cols-2 gap-4;

      .block {
        &__content {
          @apply bg-center bg-no-repeat bg-cover;
          @apply px-5 py-4;
          @apply flex items-end text-2xl font-bold text-white text-left h-full;
          box-shadow: 0px -50px 27px -15px rgba(0, 0, 0, 0.3) inset;
          transition-duration: 0.3s;
          &:hover {
            box-shadow: 0px -100px 27px -15px rgba(0, 0, 0, 0.3) inset;
          }
        }
      }
    }
  }

  &__compilation {
    &__title {
    }

    &__products {
      @apply flex gap-2 md:gap-5 overflow-x-auto flex-nowrap sm:overflow-x-hidden sm:flex-wrap;
    }
  }
}
</style>
