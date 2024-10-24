<template>
  <van-sticky>
    <van-nav-bar title="首页" :border="false" @click-left="navBarLeftClick">
    <template #left>
      <img @dragstart.prevent src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;"/>
    </template>
  </van-nav-bar>
  <!-- <div class="top_navi_containter">
    <img src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;"/>
  </div> -->
  </van-sticky>
  
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-space direction="vertical" fill :size="20">
      
      <img  @dragstart.prevent alt="Vue logo" src="../../assets/asserts/tw-badge_Normal@2x.png" height="150">
      <h3>加入币安，与7000多万人一起打造互联网的未来</h3>
      
      <CreateImportWalletVCard />
      <BitCoinListView />
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
import CreateImportWalletVCard from './CreateImportWalletVCard.vue';
import BitCoinListView from './BitCoinListView.vue';

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
    CreateImportWalletVCard,
    BitCoinListView,
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
.top_navi_containter {
  padding-left: 15px;
  display: flex;
  justify-content: left;
  align-items: center;  
  width: 100%; 
  height: 44px; 
  background-color: aquamarine;
}
.home {
  margin-left: 15px;
  margin-right: 15px;
}
.top_nav_setting_bg {
  background-color: blueviolet;
  width: auto;
  height: 44px;
}

</style>
