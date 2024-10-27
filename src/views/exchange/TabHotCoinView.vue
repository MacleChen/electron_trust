<template>
    <div>
        <div class="category_header_container">
            <div class="category_header_item">
                <label class="header_title_text_style">Hot</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/icon-caret-down_Normal@2x.png" width="10px" height="10px"/>
            </div>

            <div class="category_header_item">
                <label class="header_title_text_style">24H</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/icon-caret-down_Normal@2x.png" width="10px" height="10px"/>
            </div>

            <div class="category_header_item">
                <label class="header_title_text_style">All Networks</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/icon-caret-down_Normal@2x.png" width="10px" height="10px"/>
            </div>
        </div>

        <div class="sort_header_container">
            <div class="sort_header_item" style="width: 50%; justify-content: left;">
                <label class="sort_title_text_style">Token/24H Volume</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/sort-small-1c_Normal@2x.png" width="15px" height="15px"/>
            </div>

            <div class="sort_header_item" style="width: 25%; justify-content: flex-end;">
                <label class="sort_title_text_style">Last price</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/sort-small-1c_Normal@2x.png" width="15px" height="15px"/>
            </div>

            <div class="sort_header_item" style="width: 25%; justify-content: flex-end; margin-right: 15px;">
                <label class="sort_title_text_style">24H %</label>
                <img style="margin-left: 5px;" src="../../assets/asserts/sort-small-1c_Normal@2x.png" width="15px" height="15px"/>
            </div>
        </div>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
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
                            <img style="margin-left: 5px;" src="../../assets/asserts/0_Normal.png" width="30px" height="30px"/>
                            <div style="margin-left: 10px; ">
                                <div>
                                    <label style="font-size: 16px; font-weight: bold; color: black;">BTC</label>
                                </div>
                                <div>
                                    <label class="sort_title_text_style">$31.11B</label>
                                </div>
                            </div>
                            
                        </div>

                        <div class="item_content_cell_style" style="width: 25%; justify-content: flex-end; margin-right: 10px;">
                            <label style="font-size: 14px; font-weight: bold; color: black;">$2506.02</label>
                        </div>

                        <div class="item_content_cell_style" style="width: 25%; justify-content: flex-end;">
                            <label style="font-size: 14px; font-weight: bold; color: red;">-1.53%</label>
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
.category_header_container {
    margin-top: 20px;
    display: flex;
}

.sort_header_container {
    display: flex;
}

.category_header_item {
    background-color: #f4f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 30px;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 15px;
}

.header_title_text_style {
    font-size: 12px;
    font-weight: bold;
    color: #868d9a;
}

.sort_header_item {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 30px;
    margin-left: 15px;
}

.sort_title_text_style {
    font-size: 10px;
    color: lightgrey;
}

.item_content_cell_style {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 30px;
}
</style>