<template>
    <div style="background-color: white; width: 100%;height: 44px; position: fixed; z-index: 1;">
      <van-tabs v-model:active="active" shrink style="position: fixed; z-index: 1;" @click-tab="onClickTab" color="#0400f4">
      <van-tab title="Native staking">
      </van-tab>
      <van-tab title="Launchpool">
      </van-tab>
    </van-tabs>
    </div>

    <div style="padding-top: 44px;">
      <LaunchPoolView v-if="isShowLaunchPool" />
      <NativeStakingView v-else />
    </div>
    
</template>

<script>
import { ref } from 'vue';
import LaunchPoolView from './LaunchPoolView.vue';
import NativeStakingView from './NativeStakingView.vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const active = ref(0);
    const route = useRoute()
    const isShowLaunchPool = ref(route.query.isLaunchPool);
    active.value = isShowLaunchPool.value ? 1 : 0
    const count = ref(0);
    const loading = ref(false);
    const onClickTab = ({ title }) => {
      isShowLaunchPool.value = title == 'Launchpool'
    };
    const onRefresh = () => {
      setTimeout(() => {
        // showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return {
      active,
      count,
      loading,
      onRefresh,
      isShowLaunchPool,
      onClickTab
    };
  },
  components: {
    NativeStakingView,
    LaunchPoolView,
  }
}

</script>

<style>

</style>