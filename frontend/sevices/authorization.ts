import axios from '@/axios.global'

async function fetchAuthorization () {
  const { data } = await axios.post('/user', {
    data: ''
  })

  return data
}

export default {
  fetchAuthorization
}