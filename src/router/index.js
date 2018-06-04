import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Chart from '@/components/chart-js'

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
    }
  ]
})
