import axios from '@/axios.global'
import jwt from "jwt-decode";
import { AuthorizationType, LoginType } from '@/types/AuthorizationTypes';

async function fetchRegistration ({ phone, password, name, role }: AuthorizationType): Promise<AuthorizationType> {
  const { data: { token } } = await axios.post('/registration', {
    phone,
    password,
    name,
    role
  })
  
  return jwt(token)
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