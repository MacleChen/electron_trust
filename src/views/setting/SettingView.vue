<template>
    
    <van-nav-bar title="设置" @click-right="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div>
        <label>Setting</label>
    </div>
</template>

<script>
    import { NavBar } from 'vant';

    export default {
        name: 'SettingView',
        components: {
            [NavBar.name]: NavBar,
        },
        methods: {
            navBarLeftClick() {
                history.back(); // 使用浏览器的前进后退功能实现返回 
        }
    }
    }
</script>

<style>
    .setting {
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* 你想要的背景颜色 */
    }
</style>