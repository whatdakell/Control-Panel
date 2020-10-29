
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import App from './App.vue'
import './scss/main.scss'
require('./scss/main.scss')

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  vuetify,
	css: ["~assets/styles/main.scss"],
  render: h => h(App)
}).$mount('#app')
