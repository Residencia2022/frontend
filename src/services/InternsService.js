import { http } from '@/http'

class InternsService {
  async getAll () {
    const response = await http.get('/api/interns')
    return response.data.data
  }
}

export default new InternsService()
