<template>
    <div class="header_containter">
        <!-- title -->
         <label style="width: 50%; text-align: left;color: gray;">{{ $t('homePage.popularTokens') }}</label>
         <label style="width: 50%; text-align: right;font-size: 12px; color: lightgray;">{{ $t('homePage.lastTime') }}</label>
    </div>
    <div style="padding-bottom: 50px;">
        <ul v-for="item in cyptoCoinList" :key="item.title">
        <div class="bit_coin_cell_containter">
            <div style="width: 30px; height: 30px;">
                <img @dragstart.prevent :src="item.imgStr" width="100%" />
            </div> 
            <div style="flex-grow: 1;">
                <div style="display: flex;">
                    <label class="cell_left_title_containter" style="font-weight: bold;">{{ item.title }}</label> 
                    <label class="cell_right_title_containter" style="font-weight: bold;">${{ item.leftAllMoney }}</label>
                </div>
                <div style="display: flex;">
                    <label class="cell_left_title_containter">{{ item.subtitle }}</label>
                    <label v-if="item.percent > 0"  class="cell_right_title_containter" style="color: green;">{{ item.percent }}%</label>
                    <label v-if="item.percent == 0"  class="cell_right_title_containter" style="color: black;">{{ item.percent }}%</label>
                    <label v-if="item.percent < 0"  class="cell_right_title_containter" style="color: red;">{{ item.percent }}%</label>
                </div>
            </div>
        </div>
        </ul>
    </div>
    
</template>

<script>
import { ref, watch, inject, defineExpose } from 'vue';
import { formatNumber } from '@/utils/utils';
import { useRequest } from 'vue-hooks-plus';


export default {
    setup() {
        const globarVars = inject("globalVars")
        const cyptoCoinList = ref([]);

        const selSymbolsList = globarVars.globalBitcoinsList.filter((bitCoinModal) => bitCoinModal.isSel)
        const symbolsIDList = selSymbolsList.map((bitCoinModal) => bitCoinModal.id )

        // 请求币的市场列表
        var { data } = useRequest(() => {
            return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + symbolsIDList.join(',')).then(res => res.json());
        })
        watch(data, (newValue) => {
            for(var i = 0; i < newValue.length; i++) {
                const symbolData = newValue[i]
                cyptoCoinList.value.push({title: symbolData.symbol.toUpperCase(), subtitle: symbolData.name, 
                leftAllMoney: formatNumber(parseFloat(symbolData.current_price).toFixed(2)), percent: parseFloat(symbolData.price_change_percentage_24h).toFixed(2), rightTopMoney: '0', 
                rightBottomMoney:'0.00', imgStr: symbolData.image},)
            }
        })

        // 接收下拉刷新处理
        const reloadCryptoListData = () => {
            const { data } = useRequest(() => {
                return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + symbolsIDList.join(',')).then(res => res.json());
            })
            watch(data, (newValue) => {
                cyptoCoinList.value = []
                for(var i = 0; i < newValue.length; i++) {
                    const symbolData = newValue[i]
                    cyptoCoinList.value.push({title: symbolData.symbol.toUpperCase(), subtitle: symbolData.name, 
                    leftAllMoney: formatNumber(parseFloat(symbolData.current_price).toFixed(2)), percent: parseFloat(symbolData.price_change_percentage_24h).toFixed(2), rightTopMoney: '0', 
                    rightBottomMoney:'0.00', imgStr: symbolData.image},)
                }
            })
        }
        defineExpose({
            reloadCryptoListData,
        })

        return {
            cyptoCoinList,
            formatNumber,
            reloadCryptoListData,
        }
    },
    methods:{
    }
}
</script>

<style>
.header_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; 
    width: 100%;
    height: 40px;
}
.bit_coin_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    height: 60px;
}
.cell_left_title_containter {
    flex: 1; 
    text-align: left;
    margin-left: 10px;
}
.cell_right_title_containter {
    flex: 1; 
    text-align: right;
}
</style>