<template>
  <van-nav-bar title="" @click-left="navBarLeftClick">
  <template #left>
    <img src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;" />
  </template>
</van-nav-bar>

  <div class="home">
    <img  @dragstart.prevent alt="Vue logo" src="../../assets/asserts/1001_Normal.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import disDrag from '../../utils/disDrag.js'
import { NavBar } from 'vant';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    [NavBar.name]: NavBar,
  },
  mixins: [disDrag],
  methods: {
    navBarLeftClick() {
      this.$router.push({ name: 'setting' });
    }
  }
}
</script>

<style>
/* 全局样式 */
body, #app {
  margin: 0;
  padding: 0;
  background-color: #3e3b58; /* 你想要的背景颜色 */
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard syntax */
}

.van-nav-bar {
  top: -50px !important;
}

</style>
