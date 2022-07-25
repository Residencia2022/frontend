<template>
  <div class="d-flex align-items-center justify-content-center w-100 min-vh-100" v-if="isLoading">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <main class="row justify-content-end" v-else>
    <menu-container />
    <section class="col col-12 col-md-9 col-xl-10 p-5">
      <dashboard-header :username="user.FIRST_NAME" />
      <article class="row justify-content-center gap-5 mt-5" v-if="menuItems[menuItemSelected].title === 'home'">
        <product-card :products="products" />
      </article>
      <article class="row justify-content-center gap-5 mt-5" v-if="menuItems[menuItemSelected].title === 'users'">
        <manager-card :users="users" />
      </article>
      <article class="row flex-xxl-row-reverse mt-5" v-if="menuItems[menuItemSelected].title === 'calendar'">
        <div class="col col-12 col-md-9 col-lg-6 col-xxl-3">
          <filter-list :data="products" />
        </div>
        <duty-list :attributes="attributes" />
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
      attributes: [],
      events: [],
      interns: [],
      isLoading: true,
      products: [],
      schedules: [],
      users: []
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
    menuItems () {
      return this.$store.getters.getMenuItems
    },
    menuItemSelected () {
      return this.$store.getters.getMenuItemSelected
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
  async mounted () {
    console.time('Dashboard loaded in:')
    const values = []
    try {
      CalendarService.setToken(this.token)
      values.push(this.getCalendarEvents())
      SchedulesService.setToken(this.token)
      values.push(SchedulesService.getAll())
      if (!this.isAdmin) {
        this.$store.commit('setMenuItems', [this.menuItems.pop()])
        const results = await Promise.all(values)
        this.schedules = results[1]
      } else {
        InternsService.setToken(this.token)
        values.push(InternsService.getAll())
        ProductsService.setToken(this.token)
        values.push(ProductsService.getAll())
        UsersService.setToken(this.token)
        values.push(UsersService.getAll())
        const results = await Promise.all(values)
        this.schedules = results[1]
        this.interns = results[2]
        this.products = results[3]
        this.users = results[4]
      }
    } catch (error) {
      if (error.response.data.error) {
        this.$swal.fire({
          title: 'Error',
          text: error.response.data.error,
          icon: 'error'
        })
      } else {
        console.error(error)
        this.$swal.fire({
          title: 'Error',
          text: 'Something went wrong',
          icon: 'error'
        })
      }
    } finally {
      this.isLoading = false
    }
    console.timeEnd('Dashboard loaded in:')
  },
  watch: {
    eventFilter: {
      handler () {
        this.filterEvents()
      },
      immediate: true
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
    }
  }
}
</script>

<style>
</style>
