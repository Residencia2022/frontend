<template>
  <button @click="print" class="btn btn-outline-primary mb-3" type="button">
    Print
  </button>
</template>

<script>
import { jsPDF as JSdotPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

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
        if (result.isConfirmed && this.start && this.end) {
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
            return attribute.dates >= startDate && attribute.dates <= endDate
          })
          data.sort((a, b) => {
            return a.customData.customOrder - b.customData.customOrder
          })
          this.generatePDF(data)
        }
      })
    },
    generatePDF (data) {
      const doc = new JSdotPDF()
      autoTable(doc, {
        head: [['Date', 'Product Line', 'Schedule', 'Engineer(s)']],
        columnStyles: { 0: { minCellWidth: 15 } },
        body: data.map(attribute => {
          return [
            attribute.dates.toLocaleDateString(),
            attribute.customData.lineName,
            `${attribute.customData.scheduleName} ${attribute.customData.start ? `(${attribute.customData.start} - ${attribute.customData.end})` : ''}`,
            attribute.customData.title
          ]
        })
      })
      const documentName = `Report_${this.start}_${this.end}.pdf`
      doc.save(documentName)
    }
  }
}
</script>

<style scoped>

</style>
