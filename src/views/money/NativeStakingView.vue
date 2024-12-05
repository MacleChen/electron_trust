<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div class="native_header_container">
            <img style="margin-left: 5px;" src="../../assets/asserts/illustration-eth-staking_Normal@2x.png" width="50px" height="50px"/>
            <div style="margin-left: 10px; ">
                <div>
                    <label style="font-size: 12px; font-weight: bold; color: black;">Stake Your ETH with Trust</label>
                </div>
                <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;" @click="stakeNowOrCellBtnClick(0)">
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
            <van-cell v-for="(item, index) in cryptoList" :key="item"  @click="stakeNowOrCellBtnClick(index)">
                <template #default>
                    <div style="width: 100%; height: 50px; display: flex; align-items: center;">
                        <div class="item_content_cell_style" style="width: 50%; justify-content: left;">
                            <img style="margin-left: 5px;" :src="item.imgName" width="30px" height="30px"/>
                            <div style="margin-left: 10px; ">
                                <div>
                                    <label style="font-size: 14px; font-weight: bold; color: black;">{{ item.flag }}({{ item.title }})</label>
                                </div>
                            </div>
                            
                        </div>

                        <div class="item_content_cell_style" style="width: 50%; justify-content: flex-end;">
                            <label style="font-size: 14px; font-weight: bold; color: green;" :style="{color: item.percent > 0 ? 'green' : 'red'}" >ARP {{ item.percent > 0 ? ('+' + item.percent) : ('' + item.percent) }}%</label>
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

export default {
    setup() {
    const globarVars = inject("globalVars")
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const cryptoList = ref([]);
    var backupCryptoList = ref([])

    var { data } = useRequest(() => {
        return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
            headers: {
                "OK-Access-Key": globarVars.globalOkLinkAccessKey,
            }
        }).then(res => res.json());
    })
    watch(data, (newValue) => {
        for(var i = 0; i < newValue.length; i++) {
            const chainData = newValue[i]
            cryptoList.value.push({id: chainData.id, title: chainData.symbol.toUpperCase(), subTitle: chainData.name, 
                flag: chainData.name, isSelected: false,
                percent: chainData.ath_change_percentage,
                imgName: chainData.image})
        }
        backupCryptoList.value = cryptoList.value
    })

    return {
      loading,
      finished,
      refreshing,
      cryptoList,
    };
  },
  methods: {
    stakeNowOrCellBtnClick(index) {
        let item = this.cryptoList[index]
        this.$router.push({ name: 'nativeStakingDetailView', query: { dataDict: JSON.stringify(item) }})
    }
  }
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