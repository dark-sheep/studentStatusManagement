import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/pages/Login'
import HomePage from '../components/pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
