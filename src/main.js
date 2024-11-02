import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './langurage/en';
import zh from './langurage/zh';
// 引入模块后自动生效
import '@vant/touch-emulator';

// 1. 引入vant
// import { 
//     Button,
//     Tabbar,
//     Toast,
//  } from 'vant';
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
// 引入动画
import 'animate.css';

// 本地存储Store
// import store from 'storejs';


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
})

const app = createApp(App);
app.use(i18n)
app.use(Vant)
app.provide('globalVars', globalVars)
// app.use(Tabbar)
// app.use(Toast)
app.use(router).mount('#app')
