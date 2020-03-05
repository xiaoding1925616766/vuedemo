import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts';
import 'echarts-gl';
Vue.prototype.echarts = echarts
import $ from 'jquery'
Vue.prototype.$ = $
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')