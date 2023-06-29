import { networkInterfaces } from 'os'

export default defineEventHandler((event) => {
  return {
    data: networkInterfaces()
  }
})
