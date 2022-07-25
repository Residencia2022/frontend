<template>
  <main class="row flex-md-row-reverse">
    <section class="col col-12 col-md-6 p-5">
      <div class="my-5 text-end">
        <router-link to="/" class="text-decoration-none">
          <i class="fa-solid fa-arrow-left fs-1 text-black"></i>
        </router-link>
      </div>
      <h2>Welcome to <strong>HUAWEI Mexico TAC</strong></h2>
      <p>Log in to manage product line engineers</p>
      <hr class="hr">
      <hr>
      <form class="form-group" @submit.prevent="login">
        <div class="mb-3 form-floating">
          <input type="email" id="email" class="form-control" placeholder="user@huawei.com" v-model="email" required>
          <label for="email">Email address</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="password" id="password" class="form-control" placeholder="********" v-model="password" required>
          <label for="password">Password</label>
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" type="checkbox" value="" id="rememberCheck" v-model="remember">
          <label class="form-check-label" for="rememberCheck">Remember me</label>
        </div>
        <div class="mb-3">
          <input type="submit" value="Login" class="px-5 py-3 btn btn-primary">
        </div>
      </form>
    </section>
    <section class="col col-12 col-md-6 d-none d-md-block">
      <img src="../assets/logo.png" alt="Logo" class="p-4">
    </section>
  </main>
</template>

<script>
import LoginService from '@/services/LoginService'

export default {
  name: 'LoginView',
  data () {
    return {
      email: '',
      password: '',
      remember: false
    }
  },
  mounted () {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      this.$store.commit('setIdProductLine', user.ID_PRODUCT_LINE)
      this.$store.commit('setIsAdmin', user.ROL === 'ADMIN')
      this.$store.commit('setToken', user.TOKEN)
      this.$store.commit('setUser', user)
      this.$router.push('/dashboard')
    }
  },
  methods: {
    async login () {
      try {
        const response = await LoginService.login(this.email, this.password)
        const user = response.data
        this.$store.commit('setIdProductLine', user.ID_PRODUCT_LINE)
        this.$store.commit('setIsAdmin', user.ROL === 'ADMIN')
        this.$store.commit('setToken', user.TOKEN)
        this.$store.commit('setUser', user)
        if (this.remember) {
          localStorage.setItem('user', JSON.stringify(user))
        }
        this.$router.push('/dashboard')
      } catch (error) {
        this.$swal.fire({
          title: 'Error',
          text: error.response.data.error || 'Something went wrong',
          icon: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
hr {
  display: inline-block;
  width: 15%;
  margin-right: 3rem;
}

hr.hr {
  border: 1px solid #CF0A2C;
}

strong {
  background: linear-gradient(260deg, #EF593F 0%, #9A080D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
}

@media (min-width: 768px) {
  main.row section.col.d-none.d-md-block {
    background-image: url('../assets/login.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  main.row section.col.d-none.d-md-block img {
    width: 150px;
  }
}
</style>
