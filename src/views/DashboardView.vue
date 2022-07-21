<template>
  <div class="d-flex align-items-center justify-content-center w-100 min-vh-100" v-if="isLoading">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <main class="row" v-else>
    <menu-container :pages="pages" :pageSelected="pageSelected" :setSelected="setSelected" />
    <section class="col col-12 col-md-9 p-5">
      <dashboard-header :user="user.FIRST_NAME" :title="pages[pageSelected].title"
        :subtitle="pages[pageSelected].subtitle" />
      <article class="row mt-5" v-if="pages[pageSelected].title === 'calendar'">
        <duty-list :attributes="attributes" :user="user" />
      </article>
    </section>
  </main>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import DutyList from '@/components/DutyList.vue'
import MenuContainer from '@/components/MenuContainer.vue'

import CalendarService from '@/services/CalendarService'
import ProductsService from '@/services/ProductsService'

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
    DutyList,
    MenuContainer
  },
  data () {
    return {
      user: {},
      pages: [
        {
          title: 'home',
          subtitle: 'Product Lines',
          icon: 'fa-house'
        },
        {
          title: 'users',
          subtitle: 'Product Line Managers',
          icon: 'fa-users'
        },
        {
          title: 'interns',
          subtitle: 'Postulate List',
          icon: 'fa-user-graduate'
        },
        {
          title: 'calendar',
          subtitle: 'Engineers',
          icon: 'fa-calendar'
        }
      ],
      pageSelected: 0,
      products: [],
      users: [],
      interns: [],
      events: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      attributes: [],
      filterEventsBy: 0,
      isLoading: true
    }
  },
  async mounted () {
    this.user = this.$store.getters.getUser
    try {
      const { TOKEN } = this.user
      CalendarService.setToken(TOKEN)
      await this.getCalendarEvents()
      const { ROL } = this.user
      if (ROL === 'MANAGER') {
        this.pages.splice(0, 3)
      } else {
        // InternsService
        ProductsService.setToken(TOKEN)
        const products = await ProductsService.getProducts()
        this.products = products.data
        // UsersService
      }
    } catch (error) {
      this.$swal.fire({
        title: 'Error',
        text: error.response.data.error || 'Something went wrong',
        icon: 'error'
      })
    } finally {
      this.isLoading = false
    }
  },
  watch: {
    filterEventsBy: {
      handler () {
        this.filterEvents()
      },
      immediate: true
    }
  },
  methods: {
    setSelected (index) {
      this.pageSelected = index
    },
    async getCalendarEvents () {
      const events = await CalendarService.getCalendarByMonth(this.year, this.month)
      this.events = events.data.map(event => {
        const stylesAdmin = ['bg-info', 'bg-danger', 'bg-primary', 'bg-warning', 'bg-secondary', 'bg-success']
        const stylesManager = ['bg-primary', 'bg-success', 'bg-warning', 'bg-danger']
        let style = ''
        const { ROL } = this.user
        if (ROL === 'ADMIN') {
          style = stylesAdmin[event.ID_PRODUCT_LINE - 1]
        } else {
          style = stylesManager[event.ID_SCHEDULE - 1]
        }
        const date = event.DATES.split('T')[0].split('-')
        const year = parseInt(date[0])
        const month = parseInt(date[1]) - 1
        const day = parseInt(date[2])
        return {
          key: event.ID_CALENDAR,
          customData: {
            class: style,
            line: event.ID_PRODUCT_LINE,
            title: event.EMPLOYEE
          },
          dates: new Date(year, month, day)
        }
      })
      this.filterEvents()
    },
    filterEvents () {
      const { ID_PRODUCT_LINE } = this.user
      if (ID_PRODUCT_LINE) {
        this.attributes = this.events.filter(event => event.customData.line === ID_PRODUCT_LINE)
      } else if (this.filterEventsBy) {
        this.attributes = this.events.filter(event => event.customData.line === this.filterEventsBy)
      } else {
        this.attributes = this.events
      }
    }
  }
}
</script>

<style>

</style>
