<template>
    <div id="app">
        <van-tabbar v-model="active" route active-color="#0000FF" inactive-color="#666" fixed placeholder>
            <van-tabbar-item replace to="/home" badge="3">
                <span>首页</span>
                <template #icon="props">
                    <img :src="props.active ? icon.home_active : icon.home_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/exchange">
                <span>兑换</span>
                <template #icon="props">
                    <img :src="props.active ? icon.change_active : icon.change_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/money">
                <span>理财</span>
                <template #icon="props">
                    <img :src="props.active ? icon.money_active : icon.money_inactive" />
                </template>
            </van-tabbar-item>

            <van-tabbar-item replace to="/discover">
                <span>发现</span>
                <template #icon="props">
                    <img :src="props.active ? icon.discover_active : icon.discover_inactive" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <!-- <router-view></router-view> -->
        <!-- 页面跳转的转场动画 -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    
    export default {
        name: 'App',
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
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
            }
        },

        //初始化页面选中状态
        created() {
          //由于 vant 标签栏路由模式，无法自动加载页面，所以这里需要初始化
            console.log(this.$route);//打印当前路由属性
            if (this.$route.path === '/') {
                this.$router.push('/home');
            }
        }

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

     /* 定义fade动画 */
  .fade-enter-active, .fade-leave-active {
    will-change: transform;
      transition: all 500ms;
      position: absolute;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active for <=2.1.8 */ {
    opacity: 0;
  }
</style>

  