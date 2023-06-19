import axios from '@/axios.global'
import jwt from "jwt-decode";

async function fetchAuthorization () {
  const { data } = await axios.post('/login', {
    phone: '+79298955050',
    password: '1234567',
    name: ''
  })

  return data
}

async function fetchRegistration () {
  const { data } = await axios.post('/registration', {
    phone: '+79298945030',
    password: '1234567',
    name: 'Muhammad & Mansur INC'
  })

  console.log(jwt(data.token));
  
  return data
}

export {
  fetchAuthorization,
  fetchRegistration
}