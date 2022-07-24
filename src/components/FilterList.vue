<template>
  <form class="form-group bg-light d-grid mb-5 ms-xxl-4 p-5 rounded shadow-sm" v-if="admin">
    <div class="form-check mb-3" v-for="item in data" :key="item.ID_PRODUCT_LINE">
      <input class="form-check-input" type="radio" name="productLine" :id="`productLine${item.ID_PRODUCT_LINE}`"
        :checked="item.ID_PRODUCT_LINE === filter" @click="setFilter(item.ID_PRODUCT_LINE)">
      <label class="form-check-label" :for="`productLine${item.ID_PRODUCT_LINE}`">
        {{ item.PRODUCT_LINE }}
      </label>
    </div>
    <button type="button" class="btn btn-primary" v-if="filter" @click="setFilter(0)">Clear filter</button>
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
    admin: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true
    },
    styles: {
      type: Array,
      required: true
    },
    filter: {
      type: Number,
      default: 0
    },
    setFilter: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
