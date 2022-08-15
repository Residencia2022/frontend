<template>
  <div class="d-flex align-items-center justify-content-center w-100 min-vh-100" v-if="isLoading">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <main class="row justify-content-end" v-else>
    <menu-container :items="menuItems" />
    <section class="col col-12 col-md-9 col-xl-10 p-5">
      <dashboard-header :items="menuItems" :username="user.FIRST_NAME" />
      <article class="row justify-content-center gap-5 mt-5" v-if="menuItems[menuItemSelected].title === 'home'">
        <product-card :products="products" />
      </article>
      <article class="row justify-content-center gap-5 mt-5"
        v-if="menuItems[menuItemSelected].title === 'users' && !isEditing">
        <manager-card :users="users" />
      </article>
      <article class="row justify-content-center mt-5"
        v-if="menuItems[menuItemSelected].title === 'users' && isEditing">
        <edit-user :products="products" />
      </article>
      <article class="row justify-content-center gap-5 mt-5" v-if="menuItems[menuItemSelected].title === 'interns'">
        <intern-list :interns="interns" />
      </article>
      <article class="row flex-xxl-row-reverse mt-5" v-if="menuItems[menuItemSelected].title === 'calendar'">
        <div class="col col-12 col-xxl-3 pb-5 pt-0">
          <filter-list :products="products" :schedules="schedules" />
        </div>
        <duty-list :schedules="schedules" />
      </article>
    </section>
  </main>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import DutyList from '@/components/DutyList.vue'
import EditUser from '@/components/EditUser.vue'
import FilterList from '@/components/FilterList.vue'
import InternList from '@/components/InternList.vue'
import ManagerCard from '@/components/ManagerCard.vue'
import MenuContainer from '@/components/MenuContainer.vue'
import ProductCard from '@/components/ProductCard.vue'

import InternsService from '@/services/InternsService'
import ProductsService from '@/services/ProductsService'
import SchedulesService from '@/services/SchedulesService'
import UsersService from '@/services/UsersService'

import { menuItems } from '@/data'

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
    DutyList,
    EditUser,
    FilterList,
    InternList,
    ManagerCard,
    MenuContainer,
    ProductCard
  },
  data () {
    return {
      interns: [],
      isLoading: true,
      menuItems,
      products: [],
      schedules: [],
      users: []
    }
  },
  computed: {
    isEditing () {
      return this.$store.getters.getIsEditing
    },
    menuItemSelected () {
      return this.$store.getters.getMenuItemSelected
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  async mounted () {
    const values = []
    try {
      values.push(SchedulesService.getAll())
      if (this.user.ROL !== 'ADMIN') {
        this.menuItems = [menuItems[3]]
        this.$store.commit('setMenuItemSelected', 0)
        const results = await Promise.all(values)
        this.schedules = results[0]
      } else {
        values.push(InternsService.getAll())
        values.push(ProductsService.getAll())
        values.push(UsersService.getAll())
        const results = await Promise.all(values)
        this.schedules = results[0]
        this.interns = results[1]
        this.products = results[2]
        this.users = results[3]
      }
    } catch (error) {
      this.$swal.fire({
        title: 'Error',
        text: error.response.data.error,
        icon: 'error'
      })
    } finally {
      this.isLoading = false
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
