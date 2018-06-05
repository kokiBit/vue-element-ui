import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router,
  store
})
