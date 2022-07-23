<template>
  <div v-for="(product, index) in products" :key="index" :class="['card col col-12 col-md-5 col-lg-3', styles[index]]">
    <i :class="['fa-solid p-4 fs-1 position-absolute bottom-0 end-0 text-white', icons[index]]"></i>
    <div class="card-body">
      <h3 class="card-title p-3 text-white">
        {{ product.PRODUCT_LINE }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    products: {
      type: Array,
      required: true
    },
    styles: {
      type: Array,
      required: true
    },
    icons: {
      type: Array,
      required: true
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

.card:hover {
  box-shadow: 0px 0px 20px 15px rgba(48, 161, 173, 0.25);
}
</style>
