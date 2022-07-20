import { http } from '@/http'

class CalendarService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  async getCalendarByMonth (year, month) {
    month = month.toString().padStart(2, '0')
    const response = await http.get(`/api/calendar/${year}/${month}`)
    return response.data
  }
}

export default new CalendarService()
