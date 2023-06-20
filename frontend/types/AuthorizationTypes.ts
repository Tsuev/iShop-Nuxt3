interface AuthorizationType {
  name: string,
  password: string,
  phone: string,
  role: 'USER' | 'SELLER' | 'ADMIN'
}

export {
  AuthorizationType
}