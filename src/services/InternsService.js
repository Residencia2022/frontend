import { http } from '@/http'

class InternsService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getAll () {
    const response = await http.get('/api/interns')
    return response.data
  }
}

export default new InternsService()
