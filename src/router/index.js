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
    meta: {
      showTab:true,
      index:0,
    },
    component: HomeView
  },
  {
    path: '/exchange',
    name: 'exchange',
    meta: {
      showTab:true,
      index:0,
    },
    component: ExchangeView
  },
  {
    path: '/money',
    name: 'money',
    meta: {
      showTab:true,
      index:0,
    },
    component: MoneyView
  },
  {
    path: '/discover',
    name: 'discover',
    meta: {
      showTab:true,
      index:0,
    },
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
    meta: {
      index:1,
    },
    component: () => import('../views/setting/SettingView.vue')
  },
  {
    path: '/preferences',
    name: 'preferences',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/PreferencesView.vue')
  },
  {
    path: '/languageList',
    name: 'languageList',
    meta: {
      index:3,
    },
    component: () => import('../views/setting/LanguageListView.vue')
  },
  {
    path: '/swapSetting',
    name: 'swapSetting',
    meta: {
      index:1,
      showTab:true,
    },
    component: () => import('../views/exchange/SwapSettingView.vue')
  },
  {
    path: '/discoverTabs',
    name: 'discoverTabs',
    meta: {
      index:1,
    },
    component: () => import('../views/discover/DiscoverTabsView.vue')
  },
  {
    path: '/dappWebView',
    name: 'dappWebView',
    meta: {
      index:1,
    },
    component: () => import('../views/others/DappWebView.vue')
  },
  {
    path: '/createPasscode',
    name: 'createPasscode',
    meta: {
      index:1,
    },
    component: () => import('../views/home/CreatePasscode.vue')
  },
  {
    path: '/createNewWalletView',
    name: 'createNewWalletView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/CreateNewWalletView.vue')
  },
  {
    path: '/backupWalletView',
    name: 'backupWalletView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/BackupWalletView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
