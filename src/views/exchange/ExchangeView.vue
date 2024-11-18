<template>
  <div style="background-color: white; width: 100%;height: 44px; position: fixed; z-index: 1;">
    <van-tabs v-model:active="active" shrink style="position: fixed; z-index: 1;" @click-tab="onClickTab" color="#0400f4">
    <van-tab title="兑换">
      <!-- <TabExchangeView /> -->
    </van-tab>
    <van-tab title="热门代币">
      <template #title>
        <div style="display: flex; justify-content: center; align-items: center;">
          <label>热门代币 </label>
          <img style="margin-left: 3px;" src="../../assets/asserts/hot_tokens_fire.png" width="20px"/>
        </div>
      </template>
      <!-- <TabHotCoinView /> -->
    </van-tab>
  </van-tabs>
  <img v-if="!isShowHotBitcoin" class="setting_image_container" @dragstart.prevent src="../../assets/asserts/icon-settings-cog_Normal@2x.png" @click="settingBtnClick"/>

</div>

<div style="padding-top: 44px;">
  <TabHotCoinView v-if="isShowHotBitcoin" />
  <TabExchangeView v-else />
</div>
</template>

<script>
import TabExchangeView from './TabExchangeView.vue';
import TabHotCoinView from './TabHotCoinView.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute()
    const active = ref(route.query.isShowHotBitcoin ? 1:0);
    const isShowHotBitcoin = ref(route.query.isShowHotBitcoin);
    const onClickTab = ({ title }) => {
      isShowHotBitcoin.value = title == '热门代币'
    };
    return {
      active,
      isShowHotBitcoin,
      onClickTab
    };
  },

  components: {
    TabExchangeView,
    TabHotCoinView,
  },

  methods: {
    settingBtnClick() {
      this.$router.push({ name: 'swapSetting' });
    }
  }
}
</script>

<style>
.setting_image_container {
  height: 24px; 
  width: 24px; 
  position:fixed; 
  z-index: 999; 
  margin-top: 10px; 
  margin-left: 150px;
}
</style>