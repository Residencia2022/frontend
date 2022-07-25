import { createStore } from 'vuex'

export default createStore({
  state: {
    eventFilter: 0,
    eventStyles: ['bg-primary', 'bg-success', 'bg-warning', 'bg-danger'],
    idProductLine: null,
    isAdmin: false,
    menuItems: [
      {
        title: 'home',
        subtitle: 'Product Lines',
        icon: 'fa-house'
      },
      {
        title: 'users',
        subtitle: 'Product Line Managers',
        icon: 'fa-users'
      },
      {
        title: 'interns',
        subtitle: 'Postulate List',
        icon: 'fa-user-graduate'
      },
      {
        title: 'calendar',
        subtitle: 'Engineers',
        icon: 'fa-calendar'
      }
    ],
    menuItemSelected: 0,
    productLineStyles: [
      'bg-wireless',
      'bg-fixed',
      'bg-it',
      'bg-core',
      'bg-app',
      'bg-remote'
    ],
    token: '',
    user: {}
  },
  getters: {
    getEventFilter: (state) => state.eventFilter,
    getEventStyles: (state) => state.eventStyles,
    getIdProductLine: (state) => state.idProductLine,
    getIsAdmin: (state) => state.isAdmin,
    getMenuItems: (state) => state.menuItems,
    getMenuItemSelected: (state) => state.menuItemSelected,
    getProductLineStyles: (state) => state.productLineStyles,
    getToken: (state) => state.token,
    getUser: (state) => state.user
  },
  mutations: {
    setEventFilter (state, eventFilter) {
      state.eventFilter = eventFilter
    },
    setIdProductLine: (state, idProductLine) => {
      state.idProductLine = idProductLine
    },
    setIsAdmin: (state, isAdmin) => {
      state.isAdmin = isAdmin
    },
    setMenuItems: (state, menuItems) => {
      state.menuItems = menuItems
    },
    setMenuItemSelected: (state, menuItemSelected) => {
      state.menuItemSelected = menuItemSelected
    },
    setToken: (state, token) => {
      state.token = token
    },
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {},
  modules: {}
})
