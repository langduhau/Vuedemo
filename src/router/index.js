import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tab from '../views/movie/Tab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab
    }
  ]
})
