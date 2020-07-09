import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@exampledev/new.css/new.css'
import '@exampledev/new.css/theme/night.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
