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
          <th scope="col">Education</th>
          <th scope="col">Contact</th>
          <th scope="col">English</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="intern in internsFiltered" :key="intern.ID_INTERN" class="fs-5">
          <td>
            <p class="mb-0 text-black">{{ intern.ID_INTERN }}</p>
          </td>
          <td>
            <p class="mb-0 text-black">{{ intern.FIRST_NAME }}</p>
          </td>
          <td>
            <p class="mb-0 text-black">{{ intern.DEGREE }}</p>
            <small>{{ intern.SCHOOL }}</small>
          </td>
          <td>
            <a :href="`https://wa.me/${intern.PHONE_NUMBER}`" target="_blank" class="text-black text-decoration-none">
              {{ intern.PHONE_NUMBER }}
            </a>
            <br>
            <a :href="`mailto:${intern.EMAIL}`" target="_blank" class="text-black text-decoration-none">
              {{ intern.EMAIL }}
            </a>
          </td>
          <td class="pt-3">
            <p class="mb-0 text-black">{{ intern.ENGLISH_LEVEL }}</p>
          </td>
          <td class="pt-3">
            <p class="mb-0 text-black text-capitalize">{{ intern.CURRENT_STATUS }}</p>
          </td>
          <td class="pt-3">
            <a :href="intern.CV" target="_blank" title="Download CV" class="btn btn-sm btn-outline-primary me-2 mb-2">
              <i class="fas fa-cloud-download"></i>
            </a>
            <button type="button" class="btn btn-sm btn-outline-primary me-2 mb-2" title="Show details" @click="showIntern(intern)">
              <i class="fas fa-eye"></i>
            </button>
            <button type="button" class="btn btn-sm btn-outline-primary me-2 mb-2" title="Delete intern" @click="deleteIntern(intern)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import InternsService from '@/services/InternsService'

export default {
  name: 'InternList',
  data () {
    return {
      current_status: '',
      interns: [],
      internsFiltered: [],
      search: ''
    }
  },
  async mounted () {
    await this.getInterns()
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
              intern.CURRENT_STATUS.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.ENGLISH_LEVEL.toLowerCase().includes(this.search.toLowerCase()) ||
              intern.SCHOOL.toLowerCase().includes(this.search.toLowerCase())
            )
          })
        }
      },
      deep: true
    }
  },
  methods: {
    async getInterns () {
      this.interns = await InternsService.getAll()
      this.internsFiltered = this.interns
    },
    showIntern (intern) {
      this.$swal.fire({
        title: intern.FIRST_NAME,
        html: `
          <label for="status" class="form-label fw-bolder text-start w-100 mt-2">Status:</label>
          <select class="form-select" id="status">
            <option value="pending" ${intern.CURRENT_STATUS === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="accepted" ${intern.CURRENT_STATUS === 'accepted' ? 'selected' : ''}>Accepted</option>
            <option value="rejected" ${intern.CURRENT_STATUS === 'rejected' ? 'selected' : ''}>Rejected</option>
          </select>
          <label for="interest" class="form-label fw-bolder text-start w-100 mt-2">Interest:</label>
          <p class="mb-0 text-start">${intern.INTEREST}</p>
          <label for="motivation" class="form-label fw-bolder text-start w-100 mt-2">Motivation:</label>
          <p class="mb-0 text-start">${intern.MOTIVATION}</p>
          <label for="experience" class="form-label fw-bolder text-start w-100 mt-2">Experience:</label>
          <p class="mb-0 text-start">${intern.EXPERIENCE}</p>
          <label for="position" class="form-label fw-bolder text-start w-100 mt-2">Position:</label>
          <p class="mb-0 text-start">${intern.POSITION}</p>

        `,
        icon: 'info',
        confirmButtonText: 'Update status',
        showCancelButton: true,
        preConfirm: () => {
          this.current_status = document.getElementById('status').value
        }
      }).then(result => {
        if (result.isConfirmed) {
          InternsService.update(intern.ID_INTERN, this.current_status)
            .then(response => {
              this.$swal.fire({
                title: 'Success',
                text: response,
                icon: 'success'
              })
              this.getInterns()
            }).catch(error => {
              this.$swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
              })
            })
        }
      })
    },
    deleteIntern (intern) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: `${intern.FIRST_NAME} will be deleted`,
        icon: 'info',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete',
        showCancelButton: true
      }).then(result => {
        if (result.isConfirmed) {
          InternsService.delete(intern.ID_INTERN)
            .then(response => {
              this.$swal.fire({
                title: 'Deleted!',
                text: response,
                icon: 'success'
              })
              this.getInterns()
            }).catch(error => {
              this.$swal.fire({
                title: 'Error!',
                text: error.response.data.error,
                icon: 'error'
              })
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.text-black {
  color:#232527 !important;
}
</style>
