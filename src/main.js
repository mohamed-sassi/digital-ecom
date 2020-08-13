import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import vuetify from './plugins/vuetify';

Vue.use(VueSidebarMenu)



Vue.config.productionTip = false

Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
