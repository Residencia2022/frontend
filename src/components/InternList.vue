<template>
  <div class="d-flex align-items-center table-responsive">
    <table class="table" align="middle">
      <thead>
        <tr>
          <th scope="col">N°</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">CV</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="intern in interns" :key="intern.ID_INTERN" class="fs-5">
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
            <a :href="intern.CV" target="_blank">
              <i class="fas fa-cloud-download"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <pagination :data="InternList" @pagination-change-page="InternsService"></pagination> -->
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
  }
}
</script>

<style scoped>
.text-black {
  color:#232527 !important;
}
</style>
