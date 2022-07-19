import { http } from '@/http'

class UsersService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }
}

export default new UsersService()
