<template>
  <header class="text-end">
    <div class="row">
      <div class="col col-3 col-md-6">
        <button class="btn btn-primary d-block d-md-none" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#MenuContainer" aria-controls="MenuContainer">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="text-start d-none d-md-block">
          <h3 class="text-capitalize">
            {{ title }}
          </h3>
          <h5>
            {{ subtitle }}
          </h5>
        </div>
      </div>
      <div class="col col-9 col-md-6">
        <h5>
          Hello, {{ user }}. 🖐️
        </h5>
        <h6>
          {{ date }}
        </h6>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    user: {
      type: String,
      default: 'User'
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      date: new Date().toDateString().split(' ').splice(0, 4).join(' ')
    }
  }
}
</script>

<style>

</style>
