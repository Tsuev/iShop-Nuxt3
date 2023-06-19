<template>
  <div class="login">
    <h2 class="login__title">Войти</h2>
    <Input
      label=""
      placeholder="Логин"
      type="text"
      :required="true"
      v-model="foo"
    />
    <Input
      label=""
      placeholder="Пароль"
      type="password"
      :required="true"
      v-model="foo"
    />
    <Button> Войти </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/ui/input.vue";
import Button from "@/components/ui/button.vue";

const foo = ref();
</script>

<style lang="scss" scoped>
.login {
  &__title {
    @apply text-center text-2xl font-bold mb-8;
  }
}
</style>
