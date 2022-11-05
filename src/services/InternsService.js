import { http } from '@/http'

class InternsService {
  async getAll () {
    const response = await http.get('/api/interns')
    return response.data.data
  }

  async create (intern) {
    const response = await http.post('/api/interns', intern)
    return response.data.data
  }

  async update (id, status) {
    const response = await http.patch(`/api/interns/${id}`, { status })
    return response.data.data
  }

  async delete (id) {
    const response = await http.delete(`/api/interns/${id}`)
    return response.data.data
  }

  async uploadCV (formData) {
    const response = await http.post('/api/upload', formData)
    return response.data.data
  }
}

export default new InternsService()
