<template>
  <div v-for="(pages, index) in home" :key="index" :class="['card col col-12 col-md-5 col-lg-3', styles[index]]">
    <i :class="['fa-solid p-4 fs-1 bottom-0 end-0 text-white', icons[index]]" id="im"></i>
    <div class="card-body">
      <h3 class="card-title p-3 text-white">
        {{ pages.PRODUCT_LINE }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    home: {
      type: Array,
      required: true
    },
    styles: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      icons: [
        'fa-tower-cell',
        'fa-arrow-right-to-city',
        'fa-server',
        'fa-cloud',
        'fa-file-code',
        'fa-caravan'
      ]
    }
  }
}
</script>

<style scoped>
.card{
  height:170px;
  border-radius: 30px !important;
}

.card:hover{
  box-shadow: 0px 0px 20px 15px rgba(48, 161, 173, 0.25);
}

#color-a{
  background: rgba(12, 174, 197, 0.9);
}

#im{
  position: absolute;
}
</style>
