<template>
  <van-sticky>
    <van-nav-bar title="" @click-left="navBarLeftClick">
    <template #left>
      <img src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;"/>
    </template>
  </van-nav-bar>
  </van-sticky>
  
  

  <div class="home">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <van-space direction="vertical" fill :size="20">
      
      <img  @dragstart.prevent alt="Vue logo" src="../../assets/asserts/tw-badge_Normal@2x.png" height="150">
      <h3>加入币安，与7000多万人一起打造互联网的未来</h3>
      
      <div class="wallet_containter">
        <div class="left_iamge_containter">
          <van-image style="background-color: brown;" :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
      </div>
      </van-space>
    </van-pull-refresh>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';
import disDrag from '../../utils/disDrag.js'
import { NavBar, Space, Button, Sticky, PullRefresh, Image as VanImage } from 'vant';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        // showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return {
      count,
      loading,
      onRefresh,
    };
  },
  name: 'HomeView',
  components: {
    // HelloWorld,
    [NavBar.name]: NavBar,
    [Space.name]: Space,
    [Button.name]: Button,
    [Sticky.name]: Sticky,
    [PullRefresh.name]: PullRefresh,
    [VanImage.name]: VanImage
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
.top_nav_setting_bg {
  background-color: blueviolet;
  width: auto;
  height: 44px;
}

.wallet_containter {
  background-color: bisque;
  margin: 0;
  height: 60pt;
}
.left_iamge_containter {
  display: flex;
  background-color: blueviolet;
  margin-left: 20px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

</style>
