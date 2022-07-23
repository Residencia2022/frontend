<template>
  <div class="d-flex align-items-center justify-content-center w-100 min-vh-100" v-if="isLoading">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <main class="row" v-else>
    <menu-container :pages="pages" :pageSelected="pageSelected" :setSelected="setSelected" />
    <section class="col col-12 col-md-9 col-xl-10 p-5">
      <dashboard-header :user="user.FIRST_NAME" :title="pages[pageSelected].title"
        :subtitle="pages[pageSelected].subtitle" />
      <article class="row justify-content-center gap-5 mt-5" v-if="pages[pageSelected].title === 'home'">
        <product-card :home="products" :styles="productStyles" />
      </article>
      <article class="row justify-content-center gap-5 mt-5" v-if="pages[pageSelected].title === 'users'">
        <manager-card :users="users" />
      </article>
      <article class="row flex-xxl-row-reverse mt-5" v-if="pages[pageSelected].title === 'calendar'">
        <div class="col col-12 col-md-9 col-lg-6 col-xxl-3" v-if="user.ROL === 'ADMIN'">
          <filter-list admin :data="products" :styles="productStyles" :filterBy="filterEventsBy" :filter="setFilter" />
        </div>
        <div class="col col-12 col-md-9 col-lg-6 col-xxl-3" v-else>
          <!-- <filter-list :data="products" :styles="productStyles" /> -->
        </div>
        <duty-list :attributes="attributes" :user="user" />
      </article>
    </section>
  </main>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import DutyList from '@/components/DutyList.vue'
import FilterList from '@/components/FilterList.vue'
import ManagerCard from '@/components/ManagerCard.vue'
import MenuContainer from '@/components/MenuContainer.vue'
import ProductCard from '@/components/ProductCard.vue'

import CalendarService from '@/services/CalendarService'
import InternsService from '@/services/InternsService'
import ProductsService from '@/services/ProductsService'
import SchedulesService from '@/services/SchedulesService'
import UsersService from '@/services/UsersService'

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
    DutyList,
    FilterList,
    ManagerCard,
    MenuContainer,
    ProductCard
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
      productStyles: [
        'bg-wireless',
        'bg-fixed',
        'bg-it',
        'bg-core',
        'bg-app',
        'bg-remote'
      ],
      users: [],
      interns: [],
      events: [],
      eventStyles: [
        'bg-primary',
        'bg-success',
        'bg-warning',
        'bg-danger'
      ],
      schedules: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      attributes: [],
      filterEventsBy: 0,
      isLoading: true
    }
  },
  async mounted () {
    console.time('Dashboard loaded in:')
    this.user = this.$store.getters.getUser
    try {
      const { TOKEN } = this.user
      CalendarService.setToken(TOKEN)
      await this.getCalendarEvents()
      SchedulesService.setToken(TOKEN)
      const schedules = await SchedulesService.getSchedules()
      this.schedules = schedules.data
      const { ROL } = this.user
      if (ROL === 'MANAGER') {
        this.pages.splice(0, 3)
      } else {
        InternsService.setToken(TOKEN)
        const interns = await InternsService.getInterns()
        this.interns = interns.data
        ProductsService.setToken(TOKEN)
        const products = await ProductsService.getProducts()
        this.products = products.data
        UsersService.setToken(TOKEN)
        const users = await UsersService.getUsers()
        this.users = users.data
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
    console.timeEnd('Dashboard loaded in:')
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
    setFilter (line) {
      this.filterEventsBy = line
    },
    async getCalendarEvents () {
      // const events = await CalendarService.getCalendarByMonth(this.year, this.month)
      const events = await CalendarService.getCalendar()
      this.events = events.data.map(event => {
        let style = ''
        const { ROL } = this.user
        if (ROL === 'ADMIN') {
          style = this.productStyles[event.ID_PRODUCT_LINE - 1]
        } else {
          style = this.eventStyles[event.ID_SCHEDULE - 1]
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
