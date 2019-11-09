import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Servicos from '@/components/Servicos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/servicos',
      name: 'Servicos',
      component: Servicos
    }
  ]
})
