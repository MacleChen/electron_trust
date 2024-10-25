<template>
  <van-tabs v-model:active="active" shrink>
  <van-tab title="兑换">
    <TabExchangeView />
  </van-tab>
  <van-tab title="热门代币">
    <template #title>
      <div style="display: flex; justify-content: center; align-items: center;">
        <label>热门代币</label>
        <img style="margin-left: 3px;" src="../../assets/asserts/0_Normal.png" width="20px"/>
      </div>
    </template>
    <TabHotCoinView />
  </van-tab>
</van-tabs>
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" style="color: black;"/>
  </van-list>
</van-pull-refresh>

</template>

<script>
import { ref } from 'vue';
import { List, PullRefresh, Tab, Tabs, } from 'vant';
import TabExchangeView from './TabExchangeView.vue';
import TabHotCoinView from './TabHotCoinView.vue';

export default {
    setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
  components: {
    TabExchangeView,
    TabHotCoinView,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
}
</script>

<style>

</style>