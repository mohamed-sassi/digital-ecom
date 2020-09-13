import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import AssetPage from '../views/AssetPage'
import CheckoutPage from '../views/CheckoutPage'

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
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior(){
    return{x:0,y:0}
  }
})

export default router