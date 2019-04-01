import Vue from 'vue'
import App from './App.vue'
const uuidv4 = require('uuid/v4');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
