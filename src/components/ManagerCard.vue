<template>
  <div
    class="card px-0 col col-12 col-md-5 col-lg-3 d-flex flex-column align-items-center justify-content-center min-vh-15"
    data-toggle="tooltip" data-placement="bottom" title="Add Manager" @click="editUser({})">
    <i class="fa-regular fa-square-plus fs-1 text-success"></i>
  </div>
  <div class="card px-0 col col-12 col-md-5 col-lg-3 d-flex flex-column align-items-center"
    v-for="(user, index) in users" :key="index">
    <img :src="user.PROFILE_PICTURE || 'https://picsum.photos/200/300'" class="card-img-top rounded-circle mt-4"
      :alt="user.FIRST_NAME">
    <div class="card-body text-center">
      <h5 class="card-title fs-4 text-black">
        {{ user.FIRST_NAME }} {{ user.LAST_NAME }}
      </h5>
      <p class="card-text fs-5 text-secondary">
        {{ user.PRODUCT_LINE || user.ROL }}
      </p>
      <p class="card-text fs-5 text-danger">
        {{ user.ID_USER }}
      </p>
    </div>
    <div class="card-footer w-100 text-center">
      <p @click="editUser(user)" class="btn mb-0 p-0 text-primary">Edit user</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerCard',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    editUser (user) {
      this.$store.commit('setIsEditing', true)
      this.$store.commit('setUserEdited', user)
    }
  }
}
</script>

<style scoped>
.card-footer {
  background-color: #F2F2FD;
}

.card-img-top {
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
}

.card {
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 31px 5px rgba(0, 0, 0, 0.13);
}

.min-vh-15 {
  min-height: 15vh;
}
</style>
