import { createStore } from 'vuex'

export default createStore({
  state: {
    attributes: [],
    eventFilter: 0,
    isEditing: false,
    menuItemSelected: 0,
    user: {},
    userEdited: {}
  },
  getters: {
    getAttributes: (state) => state.attributes,
    getEventFilter: (state) => state.eventFilter,
    getIsEditing: (state) => state.isEditing,
    getMenuItemSelected: (state) => state.menuItemSelected,
    getUser: (state) => state.user,
    getUserEdited: (state) => state.userEdited
  },
  mutations: {
    setAttributes (state, attributes) {
      state.attributes = attributes
    },
    setEventFilter (state, eventFilter) {
      state.eventFilter = eventFilter
    },
    setIsEditing (state, isEditing) {
      state.isEditing = isEditing
    },
    setMenuItemSelected: (state, menuItemSelected) => {
      state.menuItemSelected = menuItemSelected
    },
    setUser: (state, user) => {
      state.user = user
    },
    setUserEdited: (state, userEdited) => {
      state.userEdited = userEdited
    }
  },
  actions: {},
  modules: {}
})
