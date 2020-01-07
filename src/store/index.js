import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogged: false,
    loading: {
      title: '',
      state: false,
      colour: 'primary'
    }
  },
  mutations: {
    showLoading (state, payload) {
      state.loading.title = payload.title
      state.loading.colour = payload.colour
      state.loading.state = true
    },
    hideLoading (state) {
      setTimeout(() => {
        state.loading.state = false
      }, 500)
    },
    changeLogged(state, value) {
      state.isLogged = value
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
