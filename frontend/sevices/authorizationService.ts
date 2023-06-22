import axios from '@/axios.global'
import jwt from "jwt-decode";
import { AuthorizationType, LoginType, User } from '@/types/AuthorizationTypes';
import { AxiosError } from 'axios'

async function fetchRegistration ({ phone, password, name, role }: User): Promise<AuthorizationType> {
  try {
    const { data: { token } } = await axios.post('/registration', {
      phone,
      password,
      name,
      role
    })
    
    return jwt(token)
  } catch (error) {
    return error as AxiosError
  }

}

async function fetchLogin ({ phone, password }: LoginType): Promise<AuthorizationType> {
  const { data: { token } } = await axios.post('/login', {
    phone,
    password
  })
  
  return jwt(token)
}



export {
  fetchLogin,
  fetchRegistration
}