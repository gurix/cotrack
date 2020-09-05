import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueIpfs from './plugins/vue-ipfs'

Vue.config.productionTip = false

// Load our IPFS plugin.
Vue.use(VueIpfs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
