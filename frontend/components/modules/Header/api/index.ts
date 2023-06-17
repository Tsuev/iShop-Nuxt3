import axios from '@/axios.global';

async function getUsers() {
  try {
    const res = axios.get('/users')
    console.log(res);
  } catch (error) {
    console.log(error)
  }

  return 'TEST'
}

export {
  getUsers
}