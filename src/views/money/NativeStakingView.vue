<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div class="native_header_container">
            <img style="margin-left: 5px;" src="../../assets/asserts/illustration-eth-staking_Normal@2x.png" width="50px" height="50px"/>
            <div style="margin-left: 10px; ">
                <div>
                    <label style="font-size: 12px; font-weight: bold; color: black;">Stake Your ETH with Trust</label>
                </div>
                <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                    <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;">Stake now</label>
                    <img src="../../assets/asserts/arrow-right-f_Normal@2x.png" width="20px" height="20px" />
                </div>
            </div>
        </div>
        <van-list 
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item">
                <template #default>
                    <div style="width: 100%; height: 50px; display: flex; align-items: center;">
                        <div class="item_content_cell_style" style="width: 50%; justify-content: left;">
                            <img style="margin-left: 5px;" src="../../assets/asserts/5_Normal.png" width="30px" height="30px"/>
                            <div style="margin-left: 10px; ">
                                <div>
                                    <label style="font-size: 14px; font-weight: bold; color: black;">Ethereum(ETH)</label>
                                </div>
                            </div>
                            
                        </div>

                        <div class="item_content_cell_style" style="width: 50%; justify-content: flex-end;">
                            <label style="font-size: 14px; font-weight: bold; color: green;">ARP+1.53%</label>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { ref } from 'vue';

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

        if (list.value.length >= 400) {
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
}
</script>

<style>

.native_header_container {
    margin-top: 20px;
    display: flex;
    background-color: #f4f4f6;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 80px;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 15px;
    margin-right: 15px;
}

.item_content_cell_style {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 30px;
}
</style>