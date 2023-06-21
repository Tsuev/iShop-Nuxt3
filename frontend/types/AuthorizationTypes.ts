interface AuthorizationType {
  name: string
  password: string
  phone: string
  role: string
}

interface LoginType {
  phone: string
  password: string
}

export {
  AuthorizationType,
  LoginType
}