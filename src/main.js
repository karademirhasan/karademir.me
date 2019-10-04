import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerOptions from './router/router.js';

Vue.use(VueRouter)
const router = new VueRouter(routerOptions);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

