<template>
  <form class="form-group d-grid px-5 mb-5" v-if="admin">
    <p class="h4 mb-3">Filter by:</p>
    <div class="form-check mb-3" v-for="item in data" :key="item.ID_PRODUCT_LINE">
      <input class="form-check-input" type="radio" name="productLine" :id="`productLine${item.ID_PRODUCT_LINE}`"
        :checked="item.ID_PRODUCT_LINE === filterBy" @click="filter(item.ID_PRODUCT_LINE)">
      <label class="form-check-label" :for="`productLine${item.ID_PRODUCT_LINE}`">
        {{ item.PRODUCT_LINE }}
      </label>
    </div>
    <button type="button" class="btn btn-primary" v-if="filterBy" @click="filter(0)">Clear filter</button>
  </form>
  <ul class="list-group p-5" v-else>
    <li v-for="(item, index) in data" :key="index" :class="['list-group-item text-white', styles[index]]">
      {{ item.PRODUCT_LINE || item.LABEL }}
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
    filterBy: {
      type: Number,
      default: 0
    },
    filter: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
