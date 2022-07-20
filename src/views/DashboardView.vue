<template>
  <main class="row justify-content-center">
    <menu-container :pages="pages" :pageSelected="pageSelected" :setSelected="setSelected" />
    <section class="col col-12 col-md-9 p-5">
      <dashboard-header :user="user.FIRST_NAME" :title="pages[pageSelected].title"
        :subtitle="pages[pageSelected].subtitle" />
    </section>
  </main>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import MenuContainer from '@/components/MenuContainer.vue'

import CalendarService from '@/services/CalendarService'
import ProductsService from '@/services/ProductsService'

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
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
      eventsFiltered: [],
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
      this.events = events.data
      this.filterEvents()
    },
    filterEvents () {
      const { ID_PRODUCT_LINE } = this.user
      if (ID_PRODUCT_LINE) {
        this.eventsFiltered = this.events.filter(event => event.ID_PRODUCT_LINE === ID_PRODUCT_LINE)
      } else if (this.filterEventsBy) {
        this.eventsFiltered = this.events.filter(event => event.ID_PRODUCT_LINE === this.filterEventsBy)
      } else {
        this.eventsFiltered = this.events
      }
    }
  }
}
</script>

<style>

</style>
