import { http } from '@/http'

class InternsService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }
}

export default new InternsService()
