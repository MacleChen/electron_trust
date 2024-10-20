import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import StartView from '@/views/startView/StartView.vue'
import TabBarView from '@/views/TabBarView.vue'
import ExchangeView from '@/views/exchange/ExchangeView.vue'
import MoneyView from '@/views/money/MoneyView.vue'
import DiscoverView from '@/views/discover/DiscoverView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: TabBarView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: ExchangeView
  },
  {
    path: '/money',
    name: 'money',
    component: MoneyView
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/setting/SettingView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
