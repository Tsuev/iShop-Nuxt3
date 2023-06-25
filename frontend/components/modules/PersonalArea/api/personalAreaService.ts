import axios from '@/axios.global';
import { SellersForApprove } from "../types/personalAreaTypes"
import { AxiosError } from 'axios';

async function fetchVerificationSellers (): Promise<SellersForApprove | AxiosError> {
  try {
    const { data } = await axios.get('/get-sellers')
    
    return data
  } catch (error) {
    return error as AxiosError
  }
}

export {
  fetchVerificationSellers
}
