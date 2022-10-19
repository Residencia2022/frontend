<template>
  <button @click="print" class="btn btn-outline-primary mb-3" type="button">
    Print
  </button>
</template>

<script>
export default {
  name: 'PrintButton',
  data () {
    return {
      start: null,
      end: null
    }
  },
  computed: {
    attributes () {
      return this.$store.getters.getAttributes
    }
  },
  methods: {
    print () {
      this.$swal.fire({
        title: 'Generate report',
        html: `
          <label for="start" class="form-label">Start date:</label>
          <input type="date" id="start" class="form-control mb-3">
          <label for="end" class="form-label">End date:</label>
          <input type="date" id="end" class="form-control">
        `,
        icon: 'info',
        confirmButtonText: 'Save',
        showCancelButton: true,
        preConfirm: () => {
          this.start = document.getElementById('start').value
          this.end = document.getElementById('end').value
        }
      }).then(result => {
        if (result.isConfirmed) {
          let startDate = this.start.split('-')
          const startYear = parseInt(startDate[0])
          const startMonth = parseInt(startDate[1]) - 1
          const startDay = parseInt(startDate[2])
          let endDate = this.end.split('-')
          const endYear = parseInt(endDate[0])
          const endMonth = parseInt(endDate[1]) - 1
          const endDay = parseInt(endDate[2])
          startDate = new Date(startYear, startMonth, startDay)
          endDate = new Date(endYear, endMonth, endDay)
          const data = this.attributes.filter(attribute => {
            console.log(attribute.dates)
            return attribute.dates >= startDate && attribute.dates <= endDate
          })
          console.log(data)
        }
      })
    },
    generatePDF (data) {
    }
  }
}
</script>

<style scoped>

</style>
