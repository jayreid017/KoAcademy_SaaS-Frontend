import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../view/Homepage.vue'
import SignIn from '../view/SignIn.vue'
import SignUp from '../view/SignUp.vue'
import test from '../test.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

export default router
