<template>
  <div class="verification-sellers">
    <div class="personal-area__title">Верификация продавцов</div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalAreaStore } from "../store/personalAreaStore";
import { storeToRefs } from "pinia";

const personalAreaStore = usePersonalAreaStore();
const { sellersForApprove } = storeToRefs(personalAreaStore);

personalAreaStore.fetchSellersForApprove();
</script>

<style lang="scss" scoped></style>
