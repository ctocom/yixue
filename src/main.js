import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';
import index from './index.js'; 
import Print from 'vue-print-nb'
import VueResource from 'vue-resource'

// import Axios from 'axios'
// import qs from "qs"							//qs引用

import App from './App.vue'

import globalVariable from './globalVariable.js'
Vue.prototype.commonsVariable = globalVariable


Vue.use(ElementUI);
Vue.use(index);
Vue.use(VueResource);
Vue.use(Print)

// Vue.prototype.$axios = Axios;
// Vue.prototype.$qs=qs;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
