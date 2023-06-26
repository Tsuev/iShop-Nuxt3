import { defineStore } from 'pinia'
import { AuthorizationType, User } from '~/types/AuthorizationTypes'
import { fetchRegistration, fetchLogin } from '~/sevices/authorizationService'
import { AxiosError, isAxiosError } from 'axios'
import { useModalStore } from '~/components/modules/Modals/store/modalStore'

const useAuthorizationStore = defineStore('authorization', () => {
    const user: Ref<User> = ref({
      name: '',
      password: '',
      phone: '',
      address: '',
      email: '',
      role: 'USER'
    })
    
    const isAuth: Ref<boolean> = ref(false)
    const authError = ref()
    const isLoading: Ref<boolean> = ref(false)

    async function registration (): Promise<AuthorizationType> {
      isLoading.value = true
      const response = await fetchRegistration(user.value)
      if(!isAxiosError(response)) {
        user.value = response
        localStorage.setItem('user', JSON.stringify(response))
        isAuth.value = true
        useModalStore().modalState = false
      } else {
        authError.value = response
      }
      isLoading.value = false
      return response
    }

    async function login (): Promise<AuthorizationType> {
      isLoading.value = true
      const response = await fetchLogin({ phone: user.value.phone, password: user.value.password })
      if(!isAxiosError(response)) {
        user.value = response
        localStorage.setItem('user', JSON.stringify(response))
        isAuth.value = true
        useModalStore().modalState = false
      } else {
        authError.value = response
      }
      isLoading.value = false
      return response
    }

    function logout(): void {
      user.value = {
        name: '',
        password: '',
        phone: '',
        address: '',
        email: '',
        role: 'USER'
      }
      isAuth.value = false
      authError.value = null
      isLoading.value = false
  
      localStorage.removeItem('user')
    }
    
    function initAuthorization() {
      const localStoreUserData = localStorage.getItem('user')

      if(localStoreUserData !== null) {
        user.value = JSON.parse(localStoreUserData)
        isAuth.value = true
        return JSON.parse(localStoreUserData)
      }
    }

    return {
      user,
      isAuth,
      authError,
      isLoading,
      registration,
      login,
      logout,
      initAuthorization
    }
})

export {
  useAuthorizationStore
}