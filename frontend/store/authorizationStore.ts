import { defineStore } from 'pinia'
import { AuthorizationType } from '~/types/AuthorizationTypes'
import { fetchRegistration, fetchLogin } from '~/sevices/authorizationService'

const useAuthorizationStore = defineStore('authorization', () => {
    const user: Ref<AuthorizationType> = ref({
      name: '',
      password: '',
      phone: '',
      role: 'USER'
    })
    const isAuth = ref(false)

    async function registration (): Promise<AuthorizationType> {
      const response = await fetchRegistration(user.value)
      user.value = response
      localStorage.setItem('user', JSON.stringify(response))
      isAuth.value = true
      
      return response
    }

    async function login (): Promise<AuthorizationType> {
      const response = await fetchLogin({ phone: user.value.phone, password: user.value.password })
      user.value = response
      localStorage.setItem('user', JSON.stringify(response))
      isAuth.value = true

      return response
    }

    function logout(): void {
      user.value = {
        name: '',
        password: '',
        phone: '',
        role: 'USER'
      }

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
      registration,
      login,
      logout,
      initAuthorization,
    }
})

export {
  useAuthorizationStore
}