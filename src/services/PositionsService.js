import { http } from '@/http'

class PositionsService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getPositions () {
    const response = await http.get('/api/positions')
    return response.data
  }
}

export default new PositionsService()