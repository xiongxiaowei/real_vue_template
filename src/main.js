// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import ElementUI from 'element-ui'
import iView from 'iview'
import 'iview/dist/styles/iview.css'   // 使用 CSS
Vue.use(iView)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './store1/index'
import Loadings from './components/loading'
require('./assets/css/base.css')
/* 全局引入base文件 */
Vue.use(Loadings)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  /* 切换路劲模式，变成history模式 */
  scrollBehavior: () => ({
    y: 0
  }),
  /* 滚动条滚动行为，不加这个就会默认记忆原来滚动条的位置 */
  routes
})
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
/* axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的 */

import axios from 'axios'
Vue.prototype.$http = axios
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading')
  return response
}, function (error) {
  return Promise.reject(error)
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
