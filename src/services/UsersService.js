import { http } from '@/http'

class UsersService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getAll () {
    const response = await http.get('/api/users')
    return response.data.data
  }
}

export default new UsersService()
