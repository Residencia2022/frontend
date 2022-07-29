<template>
  <v-calendar class="col col-12 col-xxl-9 overflow-auto" :attributes="attributes" disable-page-swipe>
    <template v-slot:day-content="{ day, attributes }">
      <div class="d-flex flex-column">
        <span class="fs-3 bg-light" @click="createEvent(day.id)">{{ day.day }}</span>
        <div class="fs-6 text-white">
          <p v-for="attr in attributes" :key="attr.key"
            :class="['rounded p-1 m-1', isAdmin && !eventFilter ? attr.customData.styleAdmin : attr.customData.styleManager]"
            @click="showEvent(attr)">
            {{ attr.customData.title }}
          </p>
        </div>
      </div>
    </template>
  </v-calendar>
</template>

<script>
import CalendarService from '@/services/CalendarService'

export default {
  name: 'DutyList',
  props: {
    schedules: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      attributes: [],
      employee: '',
      events: [],
      idSchedule: null
    }
  },
  computed: {
    eventFilter () {
      return this.$store.getters.getEventFilter
    },
    eventStyles () {
      return this.$store.getters.getEventStyles
    },
    idProductLine () {
      return this.$store.getters.getIdProductLine
    },
    isAdmin () {
      return this.$store.getters.getIsAdmin
    },
    productLineStyles () {
      return this.$store.getters.getProductLineStyles
    },
    token () {
      return this.$store.getters.getToken
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  watch: {
    eventFilter: {
      handler () {
        this.filterEvents()
      },
      immediate: true
    }
  },
  async mounted () {
    try {
      CalendarService.setToken(this.token)
      await this.getCalendarEvents()
    } catch (error) {
      this.$swal.fire({
        title: 'Error!',
        text: error.response.data.error,
        icon: 'error'
      })
    }
  },
  methods: {
    async getCalendarEvents () {
      const events = await CalendarService.getAll()
      this.events = events.map(event => {
        return {
          ...event,
          customData: {
            ...event.customData,
            styleAdmin: this.productLineStyles[event.customData.line - 1],
            styleManager: this.eventStyles[event.customData.schedule - 1]
          }
        }
      })
      this.filterEvents()
    },
    filterEvents () {
      if (this.idProductLine) {
        this.attributes = this.events.filter(event => event.customData.line === this.idProductLine)
      } else if (this.eventFilter) {
        this.attributes = this.events.filter(event => event.customData.line === this.eventFilter)
      } else {
        this.attributes = this.events
      }
    },
    createEvent (date) {
      if (this.isAdmin) {
        this.$swal.fire({
          title: 'Error',
          text: 'Only managers can create events',
          icon: 'error'
        })
        return
      }
      let combo = '<select class="form-select" id="idSchedule">'
      for (let i = 0; i < this.schedules.length; i++) {
        const { ID_SCHEDULE, LABEL } = this.schedules[i]
        combo += `<option value="${ID_SCHEDULE}">${LABEL}</option>`
      }
      combo += '</select>'
      this.$swal.fire({
        title: 'Create event',
        html: `
          <div class="form-group p-1">
            <div class="mb-3">
              ${combo}
            </div>
            <div class="mb-3">
              <input type="text" id="employee" class="form-control" placeholder="Employee(s)" />
            </div>
          </div>
        `,
        icon: 'info',
        confirmButtonText: 'Create',
        showCancelButton: true,
        preConfirm: () => {
          this.idSchedule = document.getElementById('idSchedule').value
          this.employee = document.getElementById('employee').value
        }
      }).then(result => {
        if (result.isConfirmed) {
          CalendarService.createEvent({
            ID_PRODUCT_LINE: this.idProductLine,
            ID_SCHEDULE: this.idSchedule,
            EMPLOYEE: this.employee,
            DATES: date
          }).then(response => {
            this.$swal.fire({
              title: 'Created!',
              text: response,
              icon: 'success'
            })
            this.getCalendarEvents()
          }).catch(error => {
            this.$swal.fire({
              title: 'Error!',
              text: error.response.data.error.replace(/"/g, ''),
              icon: 'error'
            })
          })
        }
      })
    },
    showEvent (event) {
      const hours = event.customData.start ? `${event.customData.start} - ${event.customData.end}` : ''
      this.$swal.fire({
        title: event.customData.lineName,
        html: `
          <p>Employee(s): <b>${event.customData.title}</b></p>
          <p>Schedule: <b>${event.customData.scheduleName}</b></p>
          <small>${hours}</small>
        `,
        icon: 'info',
        cancelButtonText: 'Ok',
        confirmButtonText: 'Delete',
        showCancelButton: true
      }).then(result => {
        if (result.isConfirmed) {
          CalendarService.deleteEvent(event.customData.id)
            .then(response => {
              this.$swal.fire({
                title: 'Deleted!',
                text: response,
                icon: 'success'
              })
              this.getCalendarEvents()
            }).catch(error => {
              this.$swal.fire({
                title: 'Error!',
                text: error.response.data.error,
                icon: 'error'
              })
            })
        }
      })
    }
  }
}
</script>

<style>

</style>
