import { http } from '@/http'

class LoginService {
  async login (email, password) {
    const response = await http.post('/login', { email, password })
    return response.data.data
  }

  async loginWithToken (token) {
    const response = await http.get(`/login?token=${token}`)
    return response.data.data
  }
}

export default new LoginService()
