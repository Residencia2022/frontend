import { http } from '@/http'

class ProductsService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getAll () {
    const response = await http.get('/api/products')
    return response.data.data
  }
}

export default new ProductsService()
