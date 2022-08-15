import { http } from '@/http'

class PositionsService {
  async getAll () {
    const response = await http.get('/api/positions')
    return response.data.data
  }
}

export default new PositionsService()
