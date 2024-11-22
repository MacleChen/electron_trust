<template>
    <div id="app">
        <router-view v-slot="{ Component }">
            
            <transition :name="transitionName" 
            >
                <component :is="Component"></component>
            </transition>

            <!-- <transition v-if="$router.i"
            mode="out-in"
            enter-from-class="animate__animated animate__slideInRight"
            enter-active-class="animate__animated animate__slideInRight"
            enter-to-class="animate__animated animate__slideInRight"
            
            leave-from-class="animate__animated animate__slideOutRight"
            leave-active-class="animate__animated animate__slideOutRight"
            leave-to-class="animate__animated animate__slideOutRight">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition> -->
        </router-view>
        <van-tabbar v-model="active" route active-color="#0000FF" inactive-color="#666" fixed placeholder v-if="$route.meta.showTab">
            <van-tabbar-item replace to="/home" badge="3">
                <span>{{ $t('tabs.home') }}</span>
                <template #icon="props">
                    <img :src="props.active ? icon.home_active : icon.home_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/exchange">
                <span>{{ $t('tabs.exchange') }}</span>
                <template #icon="props">
                    <img :src="props.active ? icon.change_active : icon.change_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/money">
                <span>{{ $t('tabs.earn') }}</span>
                <template #icon="props">
                    <img :src="props.active ? icon.money_active : icon.money_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/discover">
                <span>{{ $t('tabs.discover') }}</span>
                <template #icon="props">
                    <img :src="props.active ? icon.discover_active : icon.discover_inactive" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>

    <!-- 全局的创建和导入钱包弹窗 -->
    <van-action-sheet v-model:show="globalVars.isShowCreateImportWalletAlert" title="Connect Wallet">
        <CreateImportWalletAlert /> 
    </van-action-sheet>

    <!-- 全局加载圈 -->
    <!-- <van-loading vertical>
        <template #icon>
            <van-icon name="star-o" size="30" />
        </template>
        加载中...
    </van-loading> -->
</template>

<script>
import { inject, } from 'vue';
import CreateImportWalletAlert from './discover/widgets/CreateImportWalletAlert.vue';
export default {
    setup() {
        const globalVars = inject("globalVars")
        globalVars.userSetPassword = localStorage.getItem("pwd")
        globalVars.secretPhraseStr = localStorage.getItem("words")
        globalVars.isBackupPhrase = localStorage.getItem("isBackup")
        // // alert 
        // watch(() => globalVars.isShowCreateImportWalletAlert, (newValue) => {
        //     // isCreateImportShow.value = newValue == '1' ? true : false
        //     showToast("abcs" + newValue)
        // })

        // const mnemonic = "example twelve word seed phrase here example twelve";
        // const mytest = createBitcoinWallet(mnemonic);
        // console.log(mytest)

        

        return {
            // isCreateImportShow,
            globalVars,
        }
    },
    // onMounted() {
    //     const mnemonic = "indoor promote crowd soccer dust enforce spend tuition helmet punch bird life";
    //     const wallet = createBitcoinWallet(mnemonic);
    //     alert(wallet.mnemonic)
    // },
    data() {
        return {
            active: 0,//由于这里使用了vant 标签栏路由模式，该设置无效（但是此处不可删除）。可以自己尝试看看
            icon: {
                home_active: require('../assets/asserts/home-active-light_Normal@2x.png'),
                home_inactive: require('../assets/asserts/tabbar-home-inactive-light_Normal@2x.png'),

                change_active: require('../assets/asserts/swaps-active-light_Normal@2x.png'),
                change_inactive: require('../assets/asserts/swaps-inactive-dark_Normal@2x.png'),

                money_active: require('../assets/asserts/earn-active-light_Normal@2x.png'),
                money_inactive: require('../assets/asserts/earn-inactive-light_Normal@2x.png'),

                discover_active: require('../assets/asserts/tabbar-browser-active-light_Normal@2x.png'),
                discover_inactive: require('../assets/asserts/tabbar-browser-inactive-dark_Normal@2x.png'),
            },
            animation: '',
            transitionName: 'slide-left',
        }
    },
    //初始化页面选中状态
    created() {
        //由于 vant 标签栏路由模式，无法自动加载页面，所以这里需要初始化
        console.log(this.$route);//打印当前路由属性
        if (this.$route.path === '/') {
            this.$router.push('/home');
        }
    },
    components: {
        CreateImportWalletAlert,
    },
    watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 有主级到次级
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = '' // 同级无过渡效果
      }
    }
  },
  }
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
/*margin-top: 40px;*/

}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms cubic-bezier(.55,0,.1,1);
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>

  