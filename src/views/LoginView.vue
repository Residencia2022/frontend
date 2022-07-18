<template>
  <main class="row">
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
        <div class="mb-3">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control p-3"
            placeholder="user@huawei.com"
            v-model="email"
            required
          >
        </div>
        <div class="mb-3">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control p-3"
            placeholder="********"
            v-model="password"
            required
          >
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" type="checkbox" value="" id="rememberCheck" v-model="remember">
          <label class="form-check-label" for="rememberCheck">
            Remember me
          </label>
        </div>
        <div class="mb-3">
          <input type="submit" value="Login" class="px-5 py-3 btn btn-primary">
        </div>
      </form>
    </section>
    <section class="col col-12 col-md-6 desktop-only">
      <img src="../assets/logo.png" alt="Logo">
    </section>
  </main>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
  name: 'AboutView',
  data () {
    return {
      email: '',
      password: '',
      remember: false
    }
  },
  mounted () {
    if (localStorage.getItem('user')) {
      this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')))
      this.$router.push('/panel')
    }
  },
  methods: {
    login () {
      LoginService.login(this.email, this.password)
        .then(response => {
          this.$store.commit('setUser', response.data)
          if (this.remember) {
            localStorage.setItem('user', JSON.stringify(response.data))
          }
          this.$router.push('/panel')
        })
        .catch(error => {
          this.$swal.fire({
            title: 'Error',
            text: error.response.data.error,
            icon: 'error'
          })
        })
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

.desktop-only img {
  padding: 1.5rem;
  width: 150px;
}

@media (min-width: 768px) {
  main.row {
    flex-direction: row-reverse;
  }

  main.row section.col.desktop-only {
    background-image: url('../assets/login.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
