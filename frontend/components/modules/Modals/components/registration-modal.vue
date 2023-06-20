<template>
  <div class="login">
    <h2 class="login__title">Регистрация</h2>
    <div class="login__block">
      <Input
        label=""
        placeholder="Имя"
        type="text"
        :required="true"
        v-model="user.name"
      />
      <Input
        label=""
        placeholder="Пароль"
        type="password"
        :required="true"
        v-model="user.password"
      />
    </div>
    <!-- <div class="login__block">
      <Input
        label=""
        placeholder="Номер для связи"
        type="text"
        :required="true"
        v-model="user.phone"
        v-mask="'### ### ###'"
      />
      <Input
        label=""
        placeholder="Почта (*необезательно)"
        type="email"
        :required="false"
        v-model="user.name"
      />
    </div> -->
    <Input
      label=""
      placeholder="Адрес для доставки/самовывоза"
      type="email"
      :required="false"
      v-model="user.name"
    />
    <Toggle v-model="foo" label="Я продавец" />
    <Button @click="store.registration"> Зарегистрироваться </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/ui/input.vue";
import Button from "@/components/ui/button.vue";
import Toggle from "@/components/ui/toggle.vue";
import { useAuthorizationStore } from "@/store/authorizationStore";
import { storeToRefs } from "pinia";

const store = useAuthorizationStore();
const { user } = storeToRefs(store);
const foo = ref("");
</script>

<style lang="scss" scoped>
.login {
  &__title {
    @apply text-center text-2xl font-bold mb-3;
  }
  &__block {
    @apply flex gap-2;
  }
}
</style>
