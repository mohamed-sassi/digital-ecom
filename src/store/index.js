import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    loggedIn : true,
  },
  getters:{
    onMobile:() => screen.width < 960
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
