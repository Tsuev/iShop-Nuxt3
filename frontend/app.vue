<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import axios from "axios";

const router = useRouter();

try {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log("success connection");
} catch (error) {
  router.push("/services");
  console.log("connection error: " + error);
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
