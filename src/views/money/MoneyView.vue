<template>
    <div style="background-color: white; width: 100%;height: 44px; position: fixed; z-index: 1;">
      <van-tabs v-model:active="active" shrink style="position: fixed; z-index: 1;" @click-tab="onClickTab">
      <van-tab title="Native staking">
        <!-- <TabExchangeView /> -->
      </van-tab>
      <van-tab title="Launchpool">
        <!-- <TabHotCoinView /> -->
      </van-tab>
    </van-tabs>
    </div>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="rewards_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>
    </van-pull-refresh>
    
</template>

<script>
import { ref } from 'vue';

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
}

</script>

<style>
.rewards_cell_container {
  margin-top: 44px;
  width: 100%;
  height: 100px;
  background-color: red;
}

.learn_more_cell_container {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: beige;
}

</style>