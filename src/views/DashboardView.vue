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
      isLoading: true
    }
  },
  async mounted () {
    this.user = this.$store.getters.getUser
    try {
      const { TOKEN } = this.user
      // year and month for getting the events
      // CalendarService
      const { ROL } = this.user
      if (ROL === 'MANAGER') {
        this.pages.splice(0, 3)
        // Filter events by ID_PRODUCT_LINE
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
  methods: {
    setSelected (index) {
      this.pageSelected = index
    }
  }
}
</script>

<style>

</style>
