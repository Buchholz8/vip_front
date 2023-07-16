import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import GroupView from '../views/GroupView.vue'
import SignupView from '../views/SignupView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/Home',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/Groups',
    name: 'groupview',
    component: GroupView
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: SignupView
  }
]

const router = new VueRouter({
  routes
})

export default router
