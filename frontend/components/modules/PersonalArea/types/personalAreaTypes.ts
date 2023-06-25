interface SellerForApprove {
  address: null | string
  email: null | null
  id: number
  isAccepted: boolean
  name: string
  phone: string
  role: "SELLER"
  createdAt: string
  updatedAt: string
}

interface SellersForApprove {
  accepted: SellerForApprove[],
  notAccepted: SellerForApprove[],
}

export {
  SellerForApprove,
  SellersForApprove
}