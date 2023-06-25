<template>
  <div class="registration">
    <h2 class="registration__title">Регистрация</h2>
    <div class="registration__block">
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
    <div class="registration__block">
      <Input
        label=""
        placeholder="Номер для связи"
        type="text"
        :required="true"
        v-model="user.phone"
        v-mask="'+7 (###) ###-##-##'"
      />
      <Input
        label=""
        placeholder="Почта (*необезательно)"
        type="email"
        :required="false"
        v-model="user.email"
      />
    </div>
    <Input
      label=""
      placeholder="Адрес для доставки (*необезательно)"
      type="email"
      :required="false"
      v-model="user.address"
    />
    <Toggle v-model="role" label="Я продавец" class="my-2" />
    <div class="registration__error">
      {{ authError?.response?.data?.message }}
    </div>
    <Button @click="authorizationStore.registration">
      <Loader v-if="isLoading" />
      <span v-else>Зарегестрироваться</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/ui/input.vue";
import Button from "@/components/ui/button.vue";
import Toggle from "@/components/ui/toggle.vue";
import Loader from "@/components/ui/loader.vue";
import { useAuthorizationStore } from "@/store/authorizationStore";
import { useModalStore } from "@/components/modules/Modals/store/modalStore";
import { storeToRefs } from "pinia";

const authorizationStore = useAuthorizationStore();
const { user, authError, isLoading } = storeToRefs(authorizationStore);
const role = ref(false);

watch(role, (val) =>
  val ? (user.value.role = "SELLER") : (user.value.role = "USER")
);
</script>

<style lang="scss" scoped>
.registration {
  &__title {
    @apply text-center text-2xl font-bold mb-3;
  }
  &__block {
    @apply flex gap-2;
  }
  &__error {
    @apply text-center text-red-500 mb-1;
  }
}
</style>
