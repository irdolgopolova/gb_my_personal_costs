import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal  from './plagins/modal'

Vue.config.productionTip = false

Vue.use(modal);

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
