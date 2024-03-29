import { defineStore } from 'pinia'
import { SellersForApprove } from '../types/personalAreaTypes'
import { fetchVerificationSellers, fetchApproveSeller } from "../api/personalAreaService"
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
      icon: "ic:baseline-fact-check",
      access: ["ADMIN"],
      active: false
    },
    {
      id: 3,
      title: "Добавление товаров",
      component: "verificatrion-sellers",
      icon: "ic:baseline-phone-iphone",
      access: ["ADMIN, SELLER"],
      active: false
    },
  ])
  const activeLkComponent: Ref<string> = ref('lk')
  const sellersForApprove: Ref<SellersForApprove | undefined> = ref()
  const personalAreaError: Ref<AxiosError | undefined> = ref()
  const isLoading: Ref<boolean> = ref(false)

  async function fetchSellersForApprove(): Promise<void> {
    isLoading.value = true
    const response = await fetchVerificationSellers()
    if(!isAxiosError(response)) {
      sellersForApprove.value = response
    } else {
      personalAreaError.value = response
    }
    isLoading.value = false
  }

  async function fetchApprovedSeller(id:number) {
    await fetchApproveSeller(id)
    const response = await fetchVerificationSellers()
    if(!isAxiosError(response)) {
      sellersForApprove.value = response
    } else {
      personalAreaError.value = response
    }
  }

  return {
    lkNavData,
    isLoading,
    activeLkComponent,
    sellersForApprove,
    fetchSellersForApprove,
    fetchApprovedSeller
  }
})