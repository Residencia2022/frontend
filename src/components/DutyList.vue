<template>
  <v-calendar class="col col-12 col-xxl-9 overflow-auto" :attributes="attributes" disable-page-swipe>
    <template v-slot:day-content="{ day, attributes }">
      <div class="d-flex flex-column">
        <span class="fs-3 bg-light" @click="createEvent(day.id)">{{ day.day }}</span>
        <div class="fs-6 text-white">
          <p v-for="attr in attributes" :key="attr.key" :class="['rounded p-1 m-1', attr.customData.class]"
            @click="deleteEvent(attr.key)">
            {{ attr.customData.title }}
          </p>
        </div>
      </div>
    </template>
  </v-calendar>
</template>

<script>
export default {
  name: 'DutyList',
  props: {
    user: {
      type: Object,
      required: true
    },
    attributes: {
      type: Array,
      required: true
    }
  },
  methods: {
    async createEvent (date) {
      console.log(date)
    },
    async deleteEvent (event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>
