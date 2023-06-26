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
    <div class="login__error">
      {{ authError?.response?.data?.message }}
    </div>

    <Button @click="authorizationStore.login">
      <Loader class="w-5 h-6" v-if="isLoading" />
      <span v-else>Войти</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/ui/input.vue";
import Button from "@/components/ui/button.vue";
import Loader from "@/components/ui/loader.vue";
import { useAuthorizationStore } from "~/store/authorizationStore";
import { storeToRefs } from "pinia";

const authorizationStore = useAuthorizationStore();
const { user, authError, isLoading } = storeToRefs(authorizationStore);
</script>

<style lang="scss" scoped>
.login {
  &__title {
    @apply text-center text-2xl font-bold mb-8;
  }
  &__error {
    @apply text-center text-red-500 mb-1;
  }
}
</style>
