<template>
  <div class="pesonal-area-navigation">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="pesonal-area-navigation__link"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const tabs = reactive([
  {
    id: 0,
    title: "Личный кабинет",
    component: "lk",
  },
  {
    id: 1,
    title: "Заказы",
    component: "order",
  },
]);
</script>

<style lang="scss" scoped>
.pesonal-area-navigation {
  @apply flex flex-col text-lg;
}
</style>
