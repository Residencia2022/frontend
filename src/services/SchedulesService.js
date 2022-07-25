import { http } from '@/http'

class SchedulesService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getAll () {
    const response = await http.get('/api/schedules')
    return response.data
  }
}

export default new SchedulesService()
