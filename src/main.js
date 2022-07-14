import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VCalendar)
app.use(VueSweetalert2)
app.mount('#app')
