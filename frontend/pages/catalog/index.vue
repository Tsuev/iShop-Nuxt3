<template>
  <div class="catalog">
    <!-- <div class="brearcrubms">Главная/смартфоны</div> -->
    <div class="catalog__content">
      <div class="catalog__filter">
        <div class="filter__title">Фильтры</div>
        <div class="filter__items"></div>
      </div>
      <div class="catalog__products">
        <div class="catalog__title">iPhone 14 Pro Max</div>
        <div class="catalog__btns">
          <Button button-type="transparent" icon="ic:baseline-sort">
            Сортировка
          </Button>
          <Button
            @click="openModal"
            button-type="transparent"
            icon="ic:outline-filter-alt"
          >
            Фильтр
          </Button>
        </div>
        <div class="catalog__items">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Transition>
      <FilterModal
        v-if="modalState"
        @close="closeModal"
        modalType="filter-modal"
        :fullscreen="true"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import ProductCard from "@/components/modules/ProductCard/ProductCard.vue";
import Button from "~/components/ui/button.vue";
import FilterModal from "@/components/modules/Modals/Modal.vue";

const modalState = ref(false);

const closeModal = () => {
  modalState.value = false;
  document.body.style.overflowY = "visible";
};

const openModal = () => {
  modalState.value = true;
  document.body.style.overflowY = "hidden";
};
</script>

<style lang="scss" scoped>
.catalog {
  @apply pt-5;
  &__btns {
    @apply flex gap-2 lg:hidden my-2;
  }
  &__content {
    @apply grid grid-cols-12 gap-4;
  }
  &__filter {
    @apply col-span-2 hidden lg:block;
    .filter__title {
      @apply text-xl font-bold mb-3;
    }
    .filter__items {
      @apply bg-gray-100 rounded-lg w-full h-full;
    }
  }
  &__products {
    @apply col-span-12 lg:col-span-10;
    .catalog__title {
      @apply text-4xl font-bold mb-3;
    }
    .catalog__items {
      @apply grid grid-cols-2 lg:grid-cols-4 gap-2;
    }
  }
}
</style>
