<template>
  <aside
    :class="[desktop ? 'col col-md-3 col-xl-2 pe-0 bg-huawei d-none d-md-flex flex-column justify-content-between' : '']">
    <nav class="nav flex-column">
      <image-logo v-if="desktop" />
      <button v-for="(page, index) in pages" :key="index"
        :class="['nav-link btn text-dark text-start py-3 fs-5', pageSelected === index ? 'active' : '']"
        @click="setPageSelected(index)">
        <i :class="`fa-solid ${page.icon} me-3`"></i> {{ page.title }}
      </button>
    </nav>
    <button-logout v-if="desktop" />
  </aside>
</template>

<script>
import ButtonLogout from '@/components/ButtonLogout.vue'
import ImageLogo from '@/components/ImageLogo.vue'

export default {
  name: 'MenuContent',
  components: {
    ButtonLogout,
    ImageLogo
  },
  props: {
    desktop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pages () {
      return this.$store.getters.getPages
    },
    pageSelected () {
      return this.$store.getters.getPageSelected
    }
  },
  methods: {
    setPageSelected (index) {
      this.$store.commit('setPageSelected', index)
    }
  }
}
</script>

<style scoped>
.btn:active {
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.nav-link.btn {
  transition: all ease-in-out 0.3s;
}

.nav-link.btn.active {
  background-color: #fff;
  color: #CF0A2C !important;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.09);
}

.nav-link.btn {
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .nav-link.btn.active {
    border-radius: 20px 0px 0px 20px;
  }
}
</style>
