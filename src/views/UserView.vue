<template>
  <div></div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'UserView',
  data () {
    return {
      user: {}
    }
  },
  computed: {
    token () {
      return this.$store.getters.getToken
    }
  },
  async mounted () {
    try {
      UsersService.setToken(this.token)
      if (this.$route.params.id) {
        this.user = await UsersService.getById(this.$route.params.id)
      }
    } catch (error) {
      this.$swal.fire({
        title: 'Error',
        text: error.response.data.error,
        icon: 'error'
      })
    }
  }
}
</script>

<style>

</style>
