/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    token:JSON.parse(localStorage.getItem('token')) || null,
    user:JSON.parse(localStorage.getItem('user')) || null
  },

  getters:{
    onMobile:() => screen.width < 960,
    loggedIn(state){
      return state.token != null && state.user != null
    }
  },

  mutations: {
    SET_TOKEN(state,token){
      state.token = token
      localStorage.setItem('token',token)
    },
    SET_USER(state,user){
      state.user = user
      localStorage.setItem('user',user)
    }
  },
  actions: {
    async login({dispatch},credentials){
      try{
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login',{
          email:credentials.email,
          password:credentials.password
        })
        if(response.data.status == "error")
          return "email badly formatted"
        return dispatch('attempt',response.data.access_token)
      }
      catch(e){
        return "invalid credentials"
      }
    },

    async register({dispatch},credentials){
      try{
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register',{
          name:credentials.name,
          email:credentials.email,
          password:credentials.password
        })
        if(response.data.status == "error")
          return response.data.messages
      }
      catch(e){
        return "server error"
      }
    },

    async logout({commit}){
      let response = await axios.post('http://127.0.0.1:8000/api/auth/logout')
      axios.defaults.headers.common['Authorization'] = null
      commit('SET_TOKEN',null)
      commit('SET_USER',null)
    },

    async attempt({commit},token){
      commit('SET_TOKEN',token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try{
        let response = await axios.get('http://127.0.0.1:8000/api/auth/me')
        console.log(response.data)
        commit('SET_USER',response.data)
      }
      catch(e){
        axios.defaults.headers.common['Authorization'] = null
        commit('SET_TOKEN',null)
        commit('SET_USER',null)
      }
    }
  },
  modules: {
  }
})
