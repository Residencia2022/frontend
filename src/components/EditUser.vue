<template>
  <div class="mb-3 ms-3 text-start">
    <p @click="cancelEdit" class="btn mb-0">
      <i class="fa-solid fa-arrow-left fs-2 text-black"></i>
    </p>
  </div>
  <div class="row">
    <div class="col col-12 col-lg-4">
      <div v-if="userEdited.PROFILE_PICTURE">
        <img class="img-fluid rounded-circle mb-3 px-5" :src="userEdited.PROFILE_PICTURE" :alt="userEdited.FIRST_NAME">
      </div>
      <form class="form-group" id="profile_picture">
        <div class="input-group">
          <input type="file" name="file" id="file" class="form-control" accept="image/*" @change="uploadImage">
        </div>
      </form>
    </div>
    <div class="col col-12 col-lg-8">
      <form class="form-group" @submit.prevent="saveUser">
        <div class="mb-3 form-floating">
          <input type="text" id="id_user" class="form-control" placeholder="ID Employee" v-model="userEdited.ID_USER"
            :disabled="!isNew" :required="isNew">
          <label for="id_user">ID Employee</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="text" id="first_name" class="form-control" placeholder="First name"
            v-model="userEdited.FIRST_NAME" :required="isNew">
          <label for="first_name">First name</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="text" id="last_name" class="form-control" placeholder="Last name" v-model="userEdited.LAST_NAME"
            :required="isNew">
          <label for="last_name">Last name</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="email" id="email" class="form-control" placeholder="Email address" v-model="userEdited.EMAIL"
            :required="isNew">
          <label for="email">Email address</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="userEdited.PASSWORD"
            :required="isNew">
          <label for="password">{{ isNew ? 'New password' : 'Reset password' }}</label>
        </div>
        <div class="form-floating mb-3">
          <select id="id_product_line" class="form-select text-black" v-model="userEdited.ID_PRODUCT_LINE"
            :required="isNew">
            <option v-if="userEdited.ROL === 'ADMIN'" :value="null">All product lines</option>
            <option v-else v-for="product in products" :key="product.ID_PRODUCT_LINE" :value="product.ID_PRODUCT_LINE">
              {{ product.PRODUCT_LINE }}
            </option>
          </select>
          <label for="id_product_line">Product line</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input type="checkbox" id="active" class="form-check-input" role="switch" v-model="isActive">
          <label class="form-check-label" for="active">
            {{ isActive ? 'Active' : 'Inactive' }}
          </label>
        </div>
        <div class="mb-3 text-center">
          <input type="submit" value="Save" class="px-5 py-3 btn btn-primary">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

import { url } from '@/http'

export default {
  name: 'EditUser',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isActive: true,
      isNew: true
    }
  },
  computed: {
    userEdited () {
      return this.$store.getters.getUserEdited
    }
  },
  mounted () {
    if (this.userEdited.ID_USER) {
      this.isNew = false
      this.isActive = this.userEdited.ACTIVE === 1
    }
  },
  methods: {
    cancelEdit () {
      this.$store.commit('setIsEditing', false)
      this.$store.commit('setUserEdited', {})
    },
    uploadImage () {
      const form = document.getElementById('profile_picture')
      const formData = new FormData(form)
      UsersService.uploadImage(formData)
        .then(response => {
          this.userEdited.PROFILE_PICTURE = `${url}/files/${response}`
        }).catch(error => {
          this.$swal.fire({
            title: 'Error',
            text: error.response.data.error,
            icon: 'error'
          })
        })
    },
    saveUser () {
      const user = {
        FIRST_NAME: this.userEdited.FIRST_NAME,
        LAST_NAME: this.userEdited.LAST_NAME,
        EMAIL: this.userEdited.EMAIL,
        ACTIVE: this.isActive ? 1 : 0
      }
      if (this.userEdited.ID_PRODUCT_LINE) {
        user.ID_PRODUCT_LINE = this.userEdited.ID_PRODUCT_LINE
      }
      if (this.userEdited.PROFILE_PICTURE) {
        user.PROFILE_PICTURE = this.userEdited.PROFILE_PICTURE
      }
      if (this.userEdited.PASSWORD) {
        user.PASSWORD = this.userEdited.PASSWORD
      }
      if (this.isNew) {
        user.ID_USER = this.userEdited.ID_USER
        UsersService.create(user)
          .then(response => {
            this.$swal.fire({
              title: 'Success',
              text: response,
              icon: 'success'
            }).then(() => {
              window.location.reload()
            })
          }).catch(error => {
            this.$swal.fire({
              title: 'Error',
              text: error.response.data.error,
              icon: 'error'
            })
          })
      } else {
        UsersService.update(this.userEdited.ID_USER, user)
          .then(response => {
            this.$swal.fire({
              title: 'Success',
              text: response,
              icon: 'success'
            }).then(() => {
              window.location.reload()
            })
          }).catch(error => {
            this.$swal.fire({
              title: 'Error',
              text: error.response.data.error,
              icon: 'error'
            })
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
