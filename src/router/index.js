import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Chart from '@/components/chart-js'
import Dashboard from '@/components/dashboard'
import Radar from '@/components/radar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/chart-js',
      name: 'Chart-JS',
      component: Chart
    },{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },{
      path: '/radar',
      name: 'radar',
      component: Radar
    }
  ]
})
