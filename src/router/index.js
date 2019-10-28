import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/views/index'
export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    }
  ]
})
