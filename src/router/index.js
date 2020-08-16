import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import AssetPage from '../views/AssetPage'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/assets/:id',
    component: AssetPage
  }
]

const router = new VueRouter({
  routes
})

export default router
