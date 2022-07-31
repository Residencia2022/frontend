<template>
  <div v-for="(product, index) in products" :key="index" :class="['card col col-12 col-md-5 col-lg-3', productLineStyles[index]]"
    @click="goToCalendar(product.ID_PRODUCT_LINE)">
    <i :class="['fa-solid p-4 fs-1 position-absolute bottom-0 end-0 text-white', productLineIcons[index]]"></i>
    <div class="card-body">
      <h3 class="card-title p-3 text-white">
        {{ product.PRODUCT_LINE }}
      </h3>
    </div>
  </div>
</template>

<script>
import { productLineIcons, productLineStyles } from '@/data'

export default {
  name: 'ProductCard',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      productLineIcons,
      productLineStyles
    }
  },
  methods: {
    goToCalendar (line) {
      this.$store.commit('setEventFilter', line)
      this.$store.commit('setMenuItemSelected', 3)
    }
  }
}
</script>

<style scoped>
.card {
  height: 170px;
  border-radius: 30px !important;
  transition: box-shadow 0.3s ease-in-out;
}
</style>
