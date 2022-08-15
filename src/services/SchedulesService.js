import { http } from '@/http'

class SchedulesService {
  constructor () {
    http.defaults.headers.common.token = `${sessionStorage.getItem('token')}`
  }

  async getAll () {
    const response = await http.get('/api/schedules')
    return response.data.data
  }
}

export default new SchedulesService()
