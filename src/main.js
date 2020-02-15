import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import api from './api'
import toast from '../toast/index.js'

Vue.prototype.$api = api;
Vue.prototype.$toast = toast;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')