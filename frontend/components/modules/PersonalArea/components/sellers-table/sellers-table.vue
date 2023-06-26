<template>
  <div class="sellers-table">
    <table class="sellers-table__table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Номер</th>
          <th class="hidden lg:table-cell">Почта</th>
          <th class="hidden lg:table-cell">Адрес</th>
          <th class="hidden sm:table-cell">Дата заявки</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <sellersTr
          v-for="item in sellers"
          :key="item.id"
          :name="item.name"
          :address="item.address"
          :created-at="item.createdAt"
          :email="item.email"
          :phone="item.phone"
          :id="item.id"
          @approve="personalAreaStore.fetchApprovedSeller"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { usePersonalAreaStore } from "../../store/personalAreaStore";
import sellersTr from "./sellers-tr.vue";

const personalAreaStore = usePersonalAreaStore();

defineProps<{
  sellers: Array<any> | undefined;
}>();
</script>

<style lang="scss" scoped>
.sellers-table {
  @apply relative overflow-x-auto shadow-md sm:rounded-lg;

  &__table {
    @apply w-full text-left text-gray-500 dark:text-gray-400 table-auto;

    thead {
      @apply text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
    }

    th {
      @apply px-6 py-3;
    }
  }
}
</style>
