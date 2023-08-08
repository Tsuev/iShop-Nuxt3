<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-md">
    <th
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ name }}
    </th>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ phone }}
    </td>
    <td class="px-6 py-4 hidden lg:table-cell">
      {{ email || "Не указано" }}
    </td>
    <td class="px-6 py-4 hidden lg:table-cell">
      {{ address || "Не указано" }}
    </td>
    <td class="px-6 py-4 hidden sm:table-cell">
      {{
        new Intl.DateTimeFormat("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(createdAt))
      }}
    </td>
    <td class="px-6 py-4">
      <a
        @click="$emit('approve', id)"
        href="#"
        class="font-medium text-green-500 dark:text-blue-500 hover:underline"
        >Принять</a
      >
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  createdAt: string;
  id: number;
}>();
</script>

<style lang="scss" scoped></style>
