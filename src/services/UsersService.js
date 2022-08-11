import { http } from '@/http'

class UsersService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getAll () {
    const response = await http.get('/api/users')
    return response.data.data
  }

  async getById (id) {
    const response = await http.get(`/api/users/${id}`)
    return response.data.data
  }

  async create (user) {
    const response = await http.post('/api/users', user)
    return response.data.data
  }

  async update (id, user) {
    const response = await http.put(`/api/users/${id}`, user)
    return response.data.data
  }

  async uploadImage (formData) {
    const response = await http.post('/api/upload', formData)
    return response.data.data
  }
}

export default new UsersService()
