import axios from '@/axios.global'
import jwt from "jwt-decode";
import { AuthorizationType } from '@/types/AuthorizationTypes';

async function fetchRegistration ({ phone, password, name, role }: AuthorizationType): Promise<AuthorizationType> {
  const { data: { token } } = await axios.post('/registration', {
    phone,
    password,
    name,
    role
  })
  
  return jwt(token)
}

async function fetchAuthorization () {
  const { data } = await axios.post('/login', {
    phone: '+79298955050',
    password: '1234567',
    name: ''
  })

  return data
}



export {
  fetchAuthorization,
  fetchRegistration
}