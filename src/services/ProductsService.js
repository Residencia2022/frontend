import { http } from '@/http'

class ProductsService {
  constructor () {
    http.defaults.headers.common.token = `${sessionStorage.getItem('token')}`
  }

  async getAll () {
    const response = await http.get('/api/products')
    return response.data.data
  }
}

export default new ProductsService()
