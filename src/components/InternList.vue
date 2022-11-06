<template>
  <div class="row">
    <div class="input-group mb-3 col col-12 col-md-8 col-lg-6">
      <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
      <input type="text" class="form-control" aria-label="Sizing example input" v-model="search">
    </div>
  </div>
  <div class="d-flex align-items-center table-responsive">
    <table class="table table-hover" align="middle">
      <thead>
        <tr>
          <th scope="col">N°</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">CV</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="intern in internsFiltered" :key="intern.ID_INTERN" class="fs-5">
          <td>
            <p class="mb-0 text-black">{{ intern.ID_INTERN }}</p>
          </td>
          <td>
            <p class="mb-0 text-black">{{ intern.FIRST_NAME }}</p>
            <a :href="`https://wa.me/${intern.PHONE_NUMBER}`" target="_blank" class="text-black text-decoration-none">
              {{ intern.PHONE_NUMBER }}
            </a>
          </td>
          <td class="pt-3">
            <a :href="`mailto:${intern.EMAIL}`" target="_blank" class="text-black text-decoration-none">
              {{ intern.EMAIL }}
            </a>
          </td>
          <td class="pt-3">
            <p class="mb-0 text-black text-capitalize">{{ intern.CURRENT_STATUS }}</p>
          </td>
          <td class="pt-3">
            <a :href="intern.CV" target="_blank">
              <i class="fas fa-cloud-download"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InternList',
  props: {
    interns: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      internsFiltered: [],
      search: ''
    }
  },
  mounted () {
    this.internsFiltered = this.interns
  },
  watch: {
    search: {
      handler () {
        if (this.search === '') {
          this.internsFiltered = this.interns
        } else {
          this.internsFiltered = this.interns.filter(intern => {
            return (
              intern.FIRST_NAME.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.DEGREE.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.PHONE_NUMBER.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.EMAIL.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.CURRENT_STATUS.toLowerCase().includes(this.search.toLowerCase())
            )
          })
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.text-black {
  color:#232527 !important;
}
</style>
