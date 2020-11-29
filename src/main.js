import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Button from '@/components/elements/button-component'

Vue.component('v-btn', Button)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
