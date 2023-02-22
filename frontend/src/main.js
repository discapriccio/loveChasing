import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

 
import ElementUI from 'element-ui';
import Element from 'element-ui'
Vue.use(ElementUI);
Vue.use(Element);
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css

import '@/assets/icons' // icon

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
