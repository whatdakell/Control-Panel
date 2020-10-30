
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  vuetify,
	css: ["~assets/styles/main.scss"],
  render: h => h(App)
}).$mount('#app')
