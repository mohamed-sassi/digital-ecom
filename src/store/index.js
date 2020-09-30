/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    token: JSON.parse(localStorage.getItem('token')) || null,
    user:  null,
    cart: [],
    cartCount: 0,
  },

  getters:{
    onMobile() {
      return screen.width < 960
    },
    loggedIn(state){
      return state.token != null
    },
    isAdmin(state){
      return (state.user != null) ? state.user.role == "admin" : null
    }

  },

  mutations: {
    SET_TOKEN(state,token){
      state.token = token
      localStorage.setItem('token',JSON.stringify(token))
    },
    SET_USER(state,user){
      state.user = user
      localStorage.setItem('userId', user ? JSON.stringify(user.id) : null)
    },
    addToCart(state, item) {
      state.cart.push(item);

      state.cartCount++;
  },
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

    async attempt({commit,dispatch},token){
      commit('SET_TOKEN',token)
      dispatch('getUser',token)
    },

    async getUser({commit},token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try{
        let response = await axios.get('http://127.0.0.1:8000/api/auth/me')
        commit('SET_USER',response.data)
      }
      catch(e){
        axios.defaults.headers.common['Authorization'] = null
        commit('SET_TOKEN',null)
        commit('SET_USER',null)
      }
    },

    async logout({commit}){
      let response = await axios.post('http://127.0.0.1:8000/api/auth/logout')
      axios.defaults.headers.common['Authorization'] = null
      commit('SET_TOKEN',null)
      commit('SET_USER',null)
    },
  },
})
