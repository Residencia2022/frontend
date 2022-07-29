import { http } from '@/http'

class CalendarService {
  setToken (token) {
    http.defaults.headers.common.token = `${token}`
  }

  formatEvents (events) {
    return events.map((event) => {
      const date = event.DATES.split('T')[0].split('-')
      const year = parseInt(date[0])
      const month = parseInt(date[1]) - 1
      const day = parseInt(date[2])
      return {
        key: parseInt(
          `${event.ID_PRODUCT_LINE}${event.ID_SCHEDULE}${event.ID_CALENDAR}`
        ),
        customData: {
          id: event.ID_CALENDAR,
          line: event.ID_PRODUCT_LINE,
          lineName: event.PRODUCT_LINE,
          schedule: event.ID_SCHEDULE,
          scheduleName: event.LABEL,
          start: event.START_TIME,
          end: event.END_TIME,
          title: event.EMPLOYEE
        },
        dates: new Date(year, month, day)
      }
    })
  }

  async getAll () {
    const response = await http.get('/api/calendar')
    return this.formatEvents(response.data.data)
  }

  async getByLine (line) {
    const response = await http.get(`/api/calendar/${line}`)
    return this.formatEvents(response.data.data)
  }

  async getByMonth (year, month) {
    month = month.toString().padStart(2, '0')
    const response = await http.get(`/api/calendar/${year}/${month}`)
    return this.formatEvents(response.data.data)
  }

  async createEvent (event) {
    const response = await http.post('/api/calendar', event)
    return response.data.data
  }

  async deleteEvent (id) {
    const response = await http.delete(`/api/calendar/${id}`)
    return response.data.data
  }
}

export default new CalendarService()
