<template>
  <v-calendar class="col col-12 col-xxl-9 overflow-auto" :attributes="attributes" disable-page-swipe>
    <template v-slot:day-content="{ day, attributes }">
      <div class="d-flex flex-column">
        <span class="fs-3 bg-light" @click="createEvent(day.id)">{{ day.day }}</span>
        <div class="fs-6 text-white">
          <p v-for="attr in attributes" :key="attr.key"
            :class="['rounded p-1 m-1', user.ROL === 'ADMIN' && !eventFilter ? attr.customData.styleAdmin : attr.customData.styleManager]"
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

import { eventStyles, productLineStyles } from '@/data'

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
      employee: '',
      events: [],
      idSchedule: null
    }
  },
  computed: {
    attributes () {
      return this.$store.getters.getAttributes
    },
    eventFilter () {
      return this.$store.getters.getEventFilter
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
      CalendarService.setToken()
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
      if (this.user.ID_PRODUCT_LINE) {
        this.events = await CalendarService.getByLine(this.user.ID_PRODUCT_LINE)
      } else {
        this.events = await CalendarService.getAll()
      }
      this.events = this.events.map(event => {
        return {
          ...event,
          customData: {
            ...event.customData,
            styleAdmin: productLineStyles[event.customData.line - 1],
            styleManager: eventStyles[event.customData.schedule - 1]
          }
        }
      })
      this.filterEvents()
    },
    filterEvents () {
      if (this.eventFilter) {
        this.$store.commit('setAttributes', this.events.filter(event => event.customData.line === this.eventFilter))
      } else {
        this.$store.commit('setAttributes', this.events)
      }
    },
    createEvent (date) {
      if (this.user.ROL === 'ADMIN') {
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
            ID_PRODUCT_LINE: this.user.ID_PRODUCT_LINE,
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
