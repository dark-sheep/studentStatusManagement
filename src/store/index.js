import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      login: false,
      userName: ''
  },
  mutations: {
      changeLogin(state, status) {
        state.login = status
      },
      changeUserName(state, userName) {
        state.userName = userName
      }
  }
})