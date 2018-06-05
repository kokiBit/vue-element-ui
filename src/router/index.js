import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Chart from '@/components/chart-js'
import Dashboard from '@/components/dashboard'
import Radar from '@/components/radar'
import Login from '@/components/login'
import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.count) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.count) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      beforeEnter: ifAuthenticated,
    },{
      path: '/chart-js',
      name: 'Chart-JS',
      component: Chart,
      beforeEnter: ifAuthenticated,
    },{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      beforeEnter: ifAuthenticated,
    },{
      path: '/radar',
      name: 'radar',
      component: Radar,
      beforeEnter: ifAuthenticated,
    },{
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    }
  ]
})
