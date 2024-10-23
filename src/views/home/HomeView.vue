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
          <van-image class="tint-blue" :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
        <div>
          <div style="display: flex; justify-content: center; margin-left: 10px;margin-top: 15px;"><label class="home_cell1_title">创建一个新钱包</label><label class="home_cell_flag">赚取积分</label></div>
          <div><label class="home_cell1_subtitle">创建新的多链钱包</label></div>
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
  display: flex;
  background-color: #cfcfcf;
  margin: 0;
  height: 60pt;
  border-radius: 10px;
}
.left_iamge_containter {
  display: flex;
  background-color: #afafaf;
  margin-left: 20px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.tint-blue {
  filter: hue-rotate(-90deg); /* 改变色调，使之变成蓝色 */
}

.home_cell1_title {
  font-size: 16px;
  font-weight:bold;
  color: black;
}
.home_cell_flag {
  background-color: #888888;
  color: #525252;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
  margin-left: 5px;
}
.home_cell1_sutitle {
  font-size: 13px;
  color: rgb(48, 48, 48);
}
</style>
