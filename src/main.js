// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import Axios from 'axios'
import mixins from './mixins'
Vue.mixin(mixins)
Vue.use(Vant);
Vue.prototype.axios=Axios;
// 复制
import clipboard from 'clipboard';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
