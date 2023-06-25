import { defineStore } from 'pinia'
import { SellersForApprove } from '../types/personalAreaTypes'
import { fetchVerificationSellers } from "../api/personalAreaService"
import { AxiosError, isAxiosError } from 'axios'

export const usePersonalAreaStore =  defineStore('personal-area', () => {
  const lkNavData = ref([
    {
      id: 0,
      title: "Личный кабинет",
      component: "lk",
      icon: 'ic:baseline-account-box',
      access: ['USER', 'SELLER', 'ADMIN'],
      active: false
    },
    {
      id: 1,
      title: "Заказы",
      component: "order",
      icon: "ic:twotone-shopping-basket",
      access: ['USER', 'SELLER'],
      active: false
    },
    {
      id: 2,
      title: "Верификация продавцов",
      component: "verificatrion-sellers",
      icon: "ic:outline-check-circle",
      access: ["ADMIN"],
      active: false
    },
  ])
  const activeLkComponent: Ref<string> = ref('lk')
  const sellersForApprove: Ref<SellersForApprove | undefined> = ref()
  const personalAreaError: Ref<AxiosError | undefined> = ref()

  async function fetchSellersForApprove(): Promise<void> {
    const response = await fetchVerificationSellers()
    if(!isAxiosError(response)) {
      sellersForApprove.value = response
    } else {
      personalAreaError.value = response
    }

  }
  return {
    lkNavData,
    activeLkComponent,
    sellersForApprove,
    fetchSellersForApprove
  }
})