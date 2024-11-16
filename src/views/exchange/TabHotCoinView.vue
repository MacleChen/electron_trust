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
            <van-cell v-for="item in cryptoList" :key="item">
                <template #default>
                    <div style="width: 100%; height: 50px; display: flex; align-items: center;">
                        <div class="item_content_cell_style" style="width: 50%; justify-content: left;">
                            <img style="margin-left: 5px; border-radius: 15px;" :src="item.imgName" width="30px" height="30px"/>
                            <div style="margin-left: 10px; text-align: left">
                                <div>
                                    <label style="font-size: 16px; font-weight: bold; color: black;">{{ item.title }}</label>
                                </div>
                                <div>
                                    <label class="sort_title_text_style">${{ item.subTitle }}B</label>
                                </div>
                            </div>
                            
                        </div>

                        <div class="item_content_cell_style" style="width: 25%; justify-content: flex-end; margin-right: 10px;">
                            <label style="font-size: 14px; font-weight: bold; color: black;">${{ item.price }}</label>
                        </div>

                        <div class="item_content_cell_style" style="width: 25%; justify-content: flex-end;">
                            <label style="font-size: 14px; font-weight: bold; color: red;">{{ item.percent }}%</label>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { ref, watch, inject } from 'vue';
import { useRequest } from 'vue-hooks-plus';
import { formatNumber } from '@/utils/utils';

export default {
    setup() {
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const globarVars = inject("globalVars")

    const cryptoList = ref([]);
    var backupCryptoList = ref([])

    const onLoad = () => {
        
        var { data } = useRequest(() => {
            return fetch(globarVars.globalOkLinkUrl + '/api/v5/explorer/token/token-list?chainShortName=eth&limit=50', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            if (newValue.code == "0") {
                
                for(var i = 0; i < newValue.data[0].tokenList.length; i++) {
                    const chainData = newValue.data[0].tokenList[i]
                    cryptoList.value.push({title: chainData.token, subTitle: formatNumber(parseFloat(chainData.transactionAmount24h).toFixed(2)), 
                    price: formatNumber(parseFloat(chainData.price).toFixed(2)), percent: 2.63,
                    imgName: chainData.logoUrl})
                }
                
                backupCryptoList.value = cryptoList.value
            }

            loading.value = false
            finished.value = true
        })
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
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
      cryptoList,
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