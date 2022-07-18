import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      // ID_USER: '',
      // TOKEN: '',
      // FIRST_NAME: '',
      // LAST_NAME: '',
      // EMAIL: '',
      // ID_PRODUCT_LINE: '',
      // PROFILE_PICTURE: '',
      // ROL: ''
    }
  },
  getters: {
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit('setUser', user)
    }
  },
  modules: {}
})
