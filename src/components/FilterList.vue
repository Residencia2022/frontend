<template>
  <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-1">
    <div class="bg-light p-4 rounded shadow-sm">
      <print-button class="d-block w-100" />
      <form class="form-group d-grid" v-if="user.ROL === 'ADMIN'">
        <div class="form-check my-2" v-for="product in products" :key="product.ID_PRODUCT_LINE">
          <input class="form-check-input" type="radio" name="productLine" :id="`productLine${product.ID_PRODUCT_LINE}`"
            :checked="product.ID_PRODUCT_LINE === eventFilter" @click="setEventFilter(product.ID_PRODUCT_LINE)">
          <label class="form-check-label" :for="`productLine${product.ID_PRODUCT_LINE}`">
            {{ product.PRODUCT_LINE }}
          </label>
        </div>
        <button type="button" class="btn btn-primary mt-2" v-if="eventFilter" @click="setEventFilter(0)">Clear
          filter</button>
      </form>
    </div>
    <ul class="list-group pt-3 px-5" v-if="user.ROL === 'ADMIN' && !eventFilter">
      <li v-for="(product, index) in products" :key="index"
        :class="['list-group-item text-white', productLineStyles[index]]">
        {{ product.PRODUCT_LINE }}
      </li>
    </ul>
    <ul class="list-group pt-3 px-5" v-if="user.ROL !== 'ADMIN' || eventFilter">
      <li v-for="(schedule, index) in schedules" :key="index"
        :class="['list-group-item text-white', eventStyles[index]]">
        {{ schedule.LABEL }} {{ schedule.START_TIME ? `from ${schedule.START_TIME} to ${schedule.END_TIME}` : '' }}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventStyles, productLineStyles } from '@/data'
import PrintButton from './PrintButton.vue'

export default {
  name: 'FilterList',
  components: {
    PrintButton
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    schedules: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      eventStyles,
      productLineStyles
    }
  },
  computed: {
    eventFilter () {
      return this.$store.getters.getEventFilter
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    setEventFilter (id) {
      this.$store.commit('setEventFilter', id)
    }
  }
}
</script>

<style>

</style>
