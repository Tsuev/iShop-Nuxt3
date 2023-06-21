<template>
  <div class="login">
    <h2 class="login__title">Войти</h2>
    <Input
      label=""
      placeholder="Номер телефона"
      type="text"
      :required="true"
      v-model="user.phone"
      v-mask="'+7 (###) ###-##-##'"
    />
    <Input
      label=""
      placeholder="Пароль"
      type="password"
      :required="true"
      v-model="user.password"
    />
    <Button @click="store.login"> Войти </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/ui/input.vue";
import Button from "@/components/ui/button.vue";
import { useAuthorizationStore } from "~/store/authorizationStore";
import { storeToRefs } from "pinia";

const store = useAuthorizationStore();
const { user } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.login {
  &__title {
    @apply text-center text-2xl font-bold mb-8;
  }
}
</style>
