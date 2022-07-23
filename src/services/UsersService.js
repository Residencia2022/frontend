import { http } from '@/http'

class UsersService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getUsers () {
    const response = await http.get('/api/users')
    return response.data
  }
}

export default new UsersService()
