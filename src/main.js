import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './langurage/en';
import zh from './langurage/zh';
// 引入模块后自动生效
import '@vant/touch-emulator';

import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
// 引入动画
import 'animate.css';

// Polyfill Node.js 核心模块
import { Buffer } from 'buffer';
global.Buffer = Buffer;

import process from 'process';
global.process = process;

// 网络请求框架
import { useRequest } from 'vue-hooks-plus';

// 网络数据缺省配置
import { getGlobalBitcoinsList } from './utils/bitcoins';

const messages = {
    en,
    zh
};

const i18n = createI18n({
    legacy: false,  // 设置为 false，启用 composition API 模式
    messages,
    locale: 'en'  // 设置默认语言
  }); 

// global vars
const globalVars = reactive({
  isShowCreateImportWalletAlert: false,
  userSetPassword: "",
  secretPhraseStr: "",
  isBackupPhrase: false,

  // network
  globalBaseUrl: "https://api.binance.com",
  globalOkLinkUrl: "https://www.oklink.com",
  globalOkLinkAccessKey: "3469dd05-beab-4649-b06a-84e39a07d0c6",
  globalBitcoinsList: getGlobalBitcoinsList(),
})

const app = createApp(App);
app.use(i18n)
app.use(Vant)
app.use(useRequest)
app.provide('globalVars', globalVars)
// app.use(Tabbar)
// app.use(Toast)
app.use(router).mount('#app')
