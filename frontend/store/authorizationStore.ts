import { defineStore } from 'pinia'
import { AuthorizationType } from '~/types/AuthorizationTypes'
import { fetchRegistration } from '~/sevices/authorizationService'

const useAuthorizationStore = defineStore('authorization', () => {
    const user: Ref<AuthorizationType> = ref({
      name: '',
      password: '',
      phone: ''
    })

    async function registration (): Promise<AuthorizationType> {
      const response = await fetchRegistration(user.value)
      user.value = response
      localStorage.setItem('user', JSON.stringify(response))

      return response
    }

    return {
      user,
      registration
    }
})

export {
  useAuthorizationStore
}