<template>
  <main class="main">
    <Carousel />

    <section class="main__services">
      <h2 class="main__services__title">Категории</h2>
      <div class="main__services__content">
        <content-block>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam atque at hic. Eligendi odit asperiores
          expedita pariatur, placeat perspiciatis quaerat? Qui blanditiis nostrum facere ipsa corrupti? Ea pariatur vitae
          fugiat.
        </content-block>
        <content-block>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam atque at hic. Eligendi odit asperiores
          expedita pariatur, placeat perspiciatis quaerat? Qui blanditiis nostrum facere ipsa corrupti? Ea pariatur vitae
          fugiat.
        </content-block>
      </div>

    </section>
  </main>
</template>

<script setup lang='ts'>
import Carousel from '@/modules/Carousel/Carousel.vue'
import ContentBlock from '@/components/ui/content-block.vue'
</script>

<style lang='scss' scoped>
.main {
  @apply pt-10;

  &__services {
    @apply mt-10;

    &__content {
      @apply grid grid-cols-2 gap-4
    }

    &__title {
      @apply text-xl font-bold mb-3
    }
  }
}
</style>