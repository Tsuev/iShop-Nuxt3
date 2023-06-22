import { AxiosError } from 'axios'

interface User {
  name: string
  password: string
  phone: string
  role: string
}

type AuthorizationType = User | AxiosError 

interface LoginType {
  phone: string
  password: string
}

export {
  AuthorizationType,
  LoginType,
  User
}