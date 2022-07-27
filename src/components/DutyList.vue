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
      events: [],
      ID_SCHEDULE: null,
      EMPLOYEE: ''
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
    CalendarService.setToken(this.token)
    await this.getCalendarEvents()
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
    async createEvent (date) {
      if (this.isAdmin) {
        this.$swal.fire({
          title: 'Error',
          text: 'You are not allowed to create events, you must be a manager',
          icon: 'error'
        })
        return
      }
      let combo = '<select class="form-select" id="select"><option selected>Choose a schedule</option>'
      for (let i = 0; i < this.schedules.length; i++) {
        combo += `<option value="${this.schedules[i].ID_SCHEDULE}">${this.schedules[i].LABEL}</option>`
      }
      combo += '</select>'
      this.$swal.fire({
        title: 'Create event',
        html: `
          <div class="form-group">
            <div class="mb-3">
              ${combo}
            </div>
            <div class="mb-3">
              <input class="form-control" type="text" id="control" placeholder="EMPLOYEE" />
            </div>
          </div>
        `,
        icon: 'info',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          this.ID_SCHEDULE = document.getElementById('select').value
          this.EMPLOYEE = document.getElementById('control').value
        }
      }).then(() => {
        if (this.ID_SCHEDULE && this.EMPLOYEE.length) {
          CalendarService.createEvent({
            ID_PRODUCT_LINE: this.idProductLine,
            ID_SCHEDULE: this.ID_SCHEDULE,
            EMPLOYEE: this.EMPLOYEE,
            DATES: date
          }).then(response => {
            this.$swal.fire({
              title: 'Created!',
              text: response,
              icon: 'success',
              confirmButtonText: 'Ok'
            })
              .then(() => {
                this.getCalendarEvents()
              })
          })
            .catch(error => {
              this.$swal.fire({
                title: 'Error!',
                text: error.response.data.error.toLowerCase().replace(/_/g, ' ').replace(/"/g, ''),
                icon: 'error',
                confirmButtonText: 'Ok'
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
          <p>Engineer(s): ${event.customData.title}</p>
          <p>Schedule: ${event.customData.scheduleName}</p>
          <p>${hours}</p>
        `,
        icon: 'info',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Ok',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
      }).then((result) => {
        if (result.isConfirmed) {
          CalendarService.deleteEvent(event.customData.id)
            .then(response => {
              this.$swal.fire({
                title: 'Deleted!',
                text: response,
                icon: 'success',
                confirmButtonText: 'Ok'
              })
                .then(() => {
                  this.getCalendarEvents()
                })
            })
            .catch(error => {
              this.$swal.fire({
                title: 'Error!',
                text: error.response.data.error,
                icon: 'error',
                confirmButtonText: 'Ok'
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
