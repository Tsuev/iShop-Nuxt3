<template>
  <div class="lk">
    <div class="personal-area__title">Личный кабинет</div>
    <div class="lk__content">
      <div class="content__item">
        <div class="item__title">ID</div>
        <div class="item-value">{{ user.id || "Не указана" }}</div>
      </div>
      <div class="content__item">
        <div class="item__title">Фамилия и имя</div>
        <div class="item-value">{{ user.name || "Не указана" }}</div>
      </div>
      <div class="content__item">
        <div class="item__title">Контактный телефон</div>
        <div class="item-value">{{ user.phone || "Не указана" }}</div>
      </div>
      <div class="content__item">
        <div class="item__title">Почта</div>
        <div class="item-value">{{ user.email || "Не указана" }}</div>
      </div>
      <div class="content__item">
        <div class="item__title">Адрес</div>
        <div class="item-value">{{ user.address || "Не указана" }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = ref();
onBeforeMount(() => {
  const localStoreUserData = localStorage.getItem("user");

  if (localStoreUserData !== null) {
    user.value = JSON.parse(localStoreUserData);
  }
});
</script>

<style lang="scss" scoped>
.lk {
  &__content {
    @apply max-w-lg flex flex-col gap-2;

    .content__item {
      @apply font-medium flex justify-between text-lg;
      .item__title {
        @apply text-gray-400;
      }
    }
  }
}
</style>
