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
      this.$store.commit('setUser', {})
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
