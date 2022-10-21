import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add/payment/:category?',
    name: 'addPayment',
    component: function () {
      return import('../views/AddFormPage.vue')
    },
    props: route => ({ value: route.query.value })
  },
  {
    path: '/update/payment/:id',
    name: 'addPayment',
    component: function () {
      return import('../views/AddFormPage.vue')
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
