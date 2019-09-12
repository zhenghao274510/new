import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['./../pages/yaoqing.vue'], resolve),
      meta:{
        showshare:true
      },
    },
    {
      path: '/ggdetails',
      name: 'ggdetails',
      component: resolve => require(['./../pages/ggdetails.vue'], resolve),
      meta:{
        showshare:true
      },
    },
    {
      path: '/zanzhudetails',
      name: 'zanzhudetails',
      component: resolve => require(['./../pages/zanzhudetails.vue'], resolve),
      meta:{
        showshare:true
      },
    },
    {
      path: '/shopdetails',
      name: 'shopdetails',
      meta:{
        showshare:false
      },
      component: resolve => require(['./../pages/shopdetails.vue'], resolve),
    }, 
     {
      path: '/yaoqing',
      name: 'yaoqing',
      component: resolve => require(['./../pages/yaoqing.vue'], resolve),
      meta:{
        showshare:true
      },
      
    }
  ]
})
