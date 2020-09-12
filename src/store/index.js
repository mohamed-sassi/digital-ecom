/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    token:null,
    user:null
  },
  getters:{
    onMobile:() => screen.width < 960,
    loggedIn:()=> this.token && this.user
  },
  mutations: {
  },
  actions: {
    async login(_,credentials){
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login',{
        email:credentials.email,
        password:credentials.password
      })
      console.log(response.data)
    }
  },
  modules: {
  }
})
