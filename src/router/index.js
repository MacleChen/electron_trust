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
    path: '/setting',
    name: 'setting',
    meta: {
      index:1,
    },
    component: () => import('../views/setting/SettingView.vue')
  },
  {
    path: '/manageCryptoView',
    name: 'manageCryptoView',
    meta: {
      index:1,
    },
    component: () => import('../views/home/ManageCrypto/ManageCryptoView.vue')
  },
  {
    path: '/importCryptoView',
    name: 'importCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/ManageCrypto/ImportCryptoView.vue')
  },
  {
    path: '/notificationsView',
    name: 'notificationsView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/Notifications/NotificationsView.vue')
  },
  {
    path: '/sendCryptoView',
    name: 'sendCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeWalletOperate/SendCryptoView.vue')
  },
  {
    path: '/buyCryptoDetailView',
    name: 'buyCryptoDetailView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/HomeWalletOperate/BuyCryptoDetail/BuyCryptoDetailView.vue')
  },
  {
    path: '/paymentMethodView',
    name: 'paymentMethodView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/HomeWalletOperate/BuyCryptoDetail/PaymentMethodView.vue')
  },
  {
    path: '/receiveCryptoView',
    name: 'receiveCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeWalletOperate/ReceiveCryptoView.vue')
  },
  {
    path: '/buyCryptoView',
    name: 'buyCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeWalletOperate/BuyCryptoView.vue')
  },
  {
    path: '/sellCryptoView',
    name: 'sellCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeWalletOperate/SellCryptoView.vue')
  },
  {
    path: '/historyCryptoView',
    name: 'historyCryptoView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeWalletOperate/HistoryCryptoView.vue')
  },
  {
    path: '/selectAssetView',
    name: 'selectAssetView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/HomeWalletOperate/SelectAssetView.vue')
  },
  {
    path: '/questDetailsView',
    name: 'questDetailsView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/QuestDetails/QuestDetailsView.vue')
  },
  {
    path: '/homeEarnView',
    name: 'homeEarnView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/HomeEarn/HomeEarnView.vue')
  },
  {
    path: '/stakeINJView',
    name: 'stakeINJView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/StakeINJ/StakeINJView.vue')
  },
  {
    path: '/cryptoDetailView',
    name: 'cryptoDetailView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/MainHomeSubview/CryptoDetailView.vue')
  },
  {
    path: '/settingWalletsView',
    name: 'settingWalletsView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/wallets/SettingWalletsView.vue')
  },
  {
    path: '/settingPriceAlertsView',
    name: 'settingPriceAlertsView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/priceAlerts/SettingPriceAlertsView.vue')
  },
  {
    path: '/addressBookView',
    name: 'addressBookView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/addressBook/AddressBookView.vue')
  },
  {
    path: '/trustHandlesView',
    name: 'trustHandlesView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/TrustHandles/TrustHandlesView.vue')
  },
  {
    path: '/walletConnectView',
    name: 'walletConnectView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/WalletConnect/WalletConnectView.vue')
  },
  {
    path: '/settingSecurityView',
    name: 'settingSecurityView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/Security/SettingSecurityView.vue')
  },
  {
    path: '/settingNotificationsView',
    name: 'settingNotificationsView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/Notifications/SettingNotificationsView.vue')
  },
  {
    path: '/settingAboutView',
    name: 'settingAboutView',
    meta: {
      index:2,
    },
    component: () => import('../views/setting/About/SettingAboutView.vue')
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
    path: '/commonWebView',
    name: 'commonWebView',
    meta: {
      index:100,
    },
    component: () => import('../views/others/CommonWebView.vue')
  },
  {
    path: '/payWithTransakWebView',
    name: 'payWithTransakWebView',
    meta: {
      index:100,
    },
    component: () => import('../views/others/PayWithTransakWebView.vue')
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
    path: '/addExistingWalletView',
    name: 'addExistingWalletView',
    meta: {
      index:2,
    },
    component: () => import('../views/home/AddExistingWalletView.vue')
  },
  {
    path: '/selectNetworkView',
    name: 'selectNetworkView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/SelectNetwork/SelectNetworkView.vue')
  },
  {
    path: '/restoreWalletView',
    name: 'restoreWalletView',
    meta: {
      index:4,
    },
    component: () => import('../views/home/RestoreWallet/RestoreWalletView.vue')
  },
  {
    path: '/backupWalletView',
    name: 'backupWalletView',
    meta: {
      index:3,
    },
    component: () => import('../views/home/BackupWalletView.vue')
  },
  {
    path: '/secretPhraseView',
    name: 'secretPhraseView',
    meta: {
      index:4,
    },
    component: () => import('../views/home/SecretPhraseView.vue')
  },
  {
    path: '/confirmSecretPhraseView',
    name: 'confirmSecretPhraseView',
    meta: {
      index:5,
    },
    component: () => import('../views/home/ConfirmSecretPhraseView.vue')
  },
  {
    path: '/confirmPasscodeAlert',
    name: 'confirmPasscodeAlert',
    meta: {
      index:5,
    },
    component: () => import('../views/discover/widgets/ConfirmPasscodeAlert.vue')
  },
  {
    path: '/nativeStakingDetailView',
    name: 'nativeStakingDetailView',
    meta: {
      index:1,
    },
    component: () => import('../views/money/NativeStakingDetail/NativeStakingDetailView.vue')
  },
  {
    path: '/stakeInputAmountView',
    name: 'stakeInputAmountView',
    meta: {
      index:2,
    },
    component: () => import('../views/money/NativeStakingDetail/StakeInputAmountView.vue')
  },
  {
    path: '/providersView',
    name: 'providersView',
    meta: {
      index:3,
    },
    component: () => import('../views/money/NativeStakingDetail/ProvidersView.vue')
  },
  {
    path: '/rewardsTrackerView',
    name: 'rewardsTrackerView',
    meta: {
      index:1,
    },
    component: () => import('../views/money/LaunchPoolDetail/RewardsTrackerView.vue')
  },
  {
    path: '/launchPoolEndedDetailView',
    name: 'launchPoolEndedDetailView',
    meta: {
      index:1,
    },
    component: () => import('../views/money/LaunchPoolDetail/LaunchPoolEndedDetailView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
