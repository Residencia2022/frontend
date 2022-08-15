import { http } from '@/http'

class LoginService {
  async loginWithEmail (credentials) {
    const response = await http.post('/login', credentials)
    return response.data.data
  }

  async loginWithToken (token) {
    const response = await http.get(`/login/${token}`)
    return response.data.data
  }
}

export default new LoginService()
