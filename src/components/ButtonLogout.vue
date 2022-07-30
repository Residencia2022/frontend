<template>
  <button class="btn bnt-primary text-dark text-start my-3 fs-5" @click="logout">
    <i class="fa-solid fa-circle-arrow-left me-3"></i> Log out
  </button>
</template>

<script>
export default {
  name: 'ButtonLogout',
  methods: {
    logout () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        confirmButtonText: 'Yes, log out!',
        showCancelButton: true
      }).then(result => {
        if (result.isConfirmed) {
          this.$store.commit('setIdProductLine', null)
          this.$store.commit('setIsAdmin', false)
          this.$store.commit('setToken', '')
          this.$store.commit('setUser', {})
          localStorage.clear()
          sessionStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style>

</style>
