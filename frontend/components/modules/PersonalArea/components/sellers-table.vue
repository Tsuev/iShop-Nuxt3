<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400 table-auto">
      <thead
        class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Имя</th>
          <th scope="col" class="px-6 py-3">Номер</th>
          <th scope="col" class="px-6 py-3 hidden lg:table-cell">Почта</th>
          <th scope="col" class="px-6 py-3 hidden lg:table-cell">Адрес</th>
          <th scope="col" class="px-6 py-3 hidden sm:table-cell">
            Дата заявки
          </th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in sellers"
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-md"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.name }}
          </th>
          <td class="px-6 py-4">{{ item.phone }}</td>
          <td class="px-6 py-4 hidden lg:table-cell">
            {{ item.email || "Не указано" }}
          </td>
          <td class="px-6 py-4 hidden lg:table-cell">
            {{ item.address || "Не указано" }}
          </td>
          <td class="px-6 py-4 hidden sm:table-cell">
            {{
              new Intl.DateTimeFormat("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(item.createdAt))
            }}
          </td>
          <td class="px-6 py-4">
            <a
              @click="personalAreaStore.fetchApprovedSeller(item.id)"
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Принять</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { usePersonalAreaStore } from "../store/personalAreaStore";

const personalAreaStore = usePersonalAreaStore();

defineProps<{
  sellers: Array<any> | undefined;
}>();
</script>

<style lang="scss" scoped></style>
