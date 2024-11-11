<template>
  <div>
    <van-nav-bar :title="isHasPhrase ? $t('Home') : $t('')" :border="false" 
    @click-left="navBarLeftClick" 
    @click-right="navBarRightClick"
    :safe-area-inset-top="false" :fixed="true" :placeholder="true">
    <template #left>
      <img @dragstart.prevent src="../../assets/asserts/icon-settings-cog_Normal@2x.png" style="height: 24px; width: 24px;"/>
    </template>
    <template #right v-if="isHasPhrase">
      <img @dragstart.prevent src="../../assets/asserts/trade-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
    </template>
  </van-nav-bar>
  
  <div class="home" v-if="!isHasPhrase">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-space direction="vertical" fill :size="20">
      
      <img  @dragstart.prevent alt="Vue logo" src="../../assets/asserts/tw-badge_Normal@2x.png" height="150">
      <h3>{{ $t("homePage.intro") }}</h3>
      <CreateImportWalletVCard />
      <BitCoinListView />
      </van-space>
    </van-pull-refresh>
  </div>

  <MainHomeCardView v-else />

  </div>
    
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, inject } from 'vue';
import disDrag from '../../utils/disDrag.js'
import CreateImportWalletVCard from './CreateImportWalletVCard.vue';
import BitCoinListView from './BitCoinListView.vue';
import MainHomeCardView from './MainHomeCardView.vue';

export default {
  setup() {
    const globalVars = inject("globalVars")
    
    const isHasPhrase = globalVars.secretPhraseStr == null ? ref(false) : ref(globalVars.secretPhraseStr.split(' ').length == 12)
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
      isHasPhrase,
    };
  },
  name: 'HomeView',
  components: {
    CreateImportWalletVCard,
    BitCoinListView,
    MainHomeCardView
  },
  mixins: [disDrag],
  methods: {
    navBarLeftClick() {
      this.$router.push({ name: 'setting' });
    },
    navBarRightClick() {
      if (!this.isHasPhrase) { return }
      this.$router.push({ name: 'manageCryptoView' })
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
