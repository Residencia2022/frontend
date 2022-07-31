import { createStore } from 'vuex'

export default createStore({
  state: {
    eventFilter: 0,
    menuItemSelected: 0,
    user: {}
  },
  getters: {
    getEventFilter: (state) => state.eventFilter,
    getMenuItemSelected: (state) => state.menuItemSelected,
    getUser: (state) => state.user
  },
  mutations: {
    setEventFilter (state, eventFilter) {
      state.eventFilter = eventFilter
    },
    setMenuItemSelected: (state, menuItemSelected) => {
      state.menuItemSelected = menuItemSelected
    },
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {},
  modules: {}
})
