<template>
  <van-nav-bar title="" @click-left="navBarLeftClick">
    <template #left>
    <img src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;" />
    </template>
  </van-nav-bar>

  <van-space direction="vertical" fill :size="20">
    <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
    <div class="home">
    <img  @dragstart.prevent alt="Vue logo" src="../../assets/asserts/tw-badge_Normal@2x.png" height="150">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>加入币安，与7000多万人一起打造互联网的未来</h3>
    </div>
  </van-space>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import disDrag from '../../utils/disDrag.js'
import { NavBar, Space, Button } from 'vant';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    [NavBar.name]: NavBar,
    [Space.name]: Space,
    [Button.name]: Button,
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
.home {
  margin-left: 15px;
  margin-right: 15px;
}
.van-nav-bar {
  top: -50px !important;
}

</style>
