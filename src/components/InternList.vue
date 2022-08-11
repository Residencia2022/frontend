<template>
<div class="d-flex align-items-center">
        <table class="table" align="middle">
          <thead>
      <tr>
        <th scope="col">Photo</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">CV</th>
      </tr>
    </thead>
          <tbody>
            <tr v-for="intern in interns" :key="intern.ID_INTERN">
            <td>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 50px; height: px"
              class="rounded-circle" />
            </td>
              <td>
                <p>{{ intern.FIRST_NAME }}</p>
                <a :href="intern.PHONE_NUMBER">{{ intern.PHONE_NUMBER }}</a>
              </td>
              <td>{{ intern.EMAIL }}</td>
              <td>
                <a :href="intern.CV">
                  <i class="fas fa-cloud-download"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <pagination :data="InternList" @pagination-change-page="InternsService"></pagination>
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

<style>

</style>
