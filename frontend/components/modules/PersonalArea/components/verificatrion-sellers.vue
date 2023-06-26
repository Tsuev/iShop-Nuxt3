<template>
  <div class="verification-sellers">
    <div class="personal-area__title">Верификация продавцов</div>
    <Loader class="w-20 mr-auto ml-auto mt-20 mb-20" v-if="isLoading" />
    <SellersTable :sellers="sellersForApprove?.accepted" />
  </div>
</template>

<script setup lang="ts">
import { usePersonalAreaStore } from "../store/personalAreaStore";
import { storeToRefs } from "pinia";
import Loader from "~/components/ui/loader.vue";
import SellersTable from "./sellers-table.vue";

const personalAreaStore = usePersonalAreaStore();
const { sellersForApprove, isLoading } = storeToRefs(personalAreaStore);

personalAreaStore.fetchSellersForApprove();
</script>

<style lang="scss" scoped></style>
