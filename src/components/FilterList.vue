<template>
  <form class="form-group bg-light d-grid mb-5 ms-xxl-4 p-5 rounded shadow-sm" v-if="isAdmin">
    <div class="form-check mb-3" v-for="item in data" :key="item.ID_PRODUCT_LINE">
      <input class="form-check-input" type="radio" name="productLine" :id="`productLine${item.ID_PRODUCT_LINE}`"
        :checked="item.ID_PRODUCT_LINE === eventFilter" @click="setEventFilter(item.ID_PRODUCT_LINE)">
      <label class="form-check-label" :for="`productLine${item.ID_PRODUCT_LINE}`">
        {{ item.PRODUCT_LINE }}
      </label>
    </div>
    <button type="button" class="btn btn-primary" v-if="eventFilter" @click="setEventFilter(0)">Clear filter</button>
  </form>
  <ul class="list-group p-5" v-else>
    <li v-for="(item, index) in data" :key="index" :class="['list-group-item text-white', styles[index]]">
      {{ item.LABEL }}, {{ item.START_TIME }} to {{ item.END_TIME }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FilterList',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    eventFilter () {
      return this.$store.getters.getEventFilter
    },
    isAdmin () {
      return this.$store.getters.getIsAdmin
    },
    styles () {
      return this.$store.getters.getProductLineStyles
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
