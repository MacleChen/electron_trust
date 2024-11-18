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
                    <label class="cell_right_title_containter" style="font-weight: bold;">${{ formatNumber(item.money) }}</label>
                </div>
                <div style="display: flex;">
                    <label class="cell_left_title_containter">{{ item.subtitle }}</label>
                    <label v-if="item.percent > 0"  class="cell_right_title_containter" style="color: red;">{{ item.percent }}%</label>
                    <label v-if="item.percent == 0"  class="cell_right_title_containter" style="color: black;">{{ item.percent }}%</label>
                    <label v-if="item.percent < 0"  class="cell_right_title_containter" style="color: green;">{{ item.percent }}%</label>
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

        const symbolsList = selSymbolsList.map((bitCoinModal) => bitCoinModal.title )
        const symbolsSubTitleList = selSymbolsList.map((bitCoinModal) => bitCoinModal.subTitle)
        const symbolsImgNameList = selSymbolsList.map((bitCoinModal) => bitCoinModal.imgName)


        // 请求币的市场列表
        var { data } = useRequest(() => {
            return fetch(globarVars.globalBaseUrl + '/api/v3/ticker/tradingDay?symbols=' + JSON.stringify(symbolsList)).then(res => res.json());
        })
        watch(data, (newValue) => {
            for(var i = 0; i < newValue.length; i++) {
                const symbolData = newValue[i]
                cyptoCoinList.value.push({title: symbolData.symbol.replace('USDT', ''), subtitle: symbolsSubTitleList[i], 
                money: formatNumber(parseFloat(symbolData.lastPrice).toFixed(2)), percent: parseFloat(symbolData.priceChangePercent).toFixed(2),
                 imgStr: require('../../assets/asserts/' + symbolsImgNameList[i] + '.png')},)
            }
        })

        // 接收下拉刷新处理
        const reloadCryptoListData = () => {
            const { data } = useRequest(() => {
                return fetch(globarVars.globalBaseUrl + '/api/v3/ticker/tradingDay?symbols=' + JSON.stringify(symbolsList)).then(res => res.json());
            })
            watch(data, (newValue) => {
                cyptoCoinList.value = []
                for(var i = 0; i < newValue.length; i++) {
                    const symbolData = newValue[i]
                    cyptoCoinList.value.push({title: symbolData.symbol.replace('USDT', ''), subtitle: symbolsSubTitleList[i], 
                    leftAllMoney: formatNumber(parseFloat(symbolData.lastPrice).toFixed(2)), percent: parseFloat(symbolData.priceChangePercent).toFixed(2), rightTopMoney: '0', 
                    rightBottomMoney:'0.00', imgStr: require('../../assets/asserts/' + symbolsImgNameList[i] + '.png')},)
                }
            })
        }
        defineExpose({
            reloadCryptoListData,
        })

        return {
            cyptoCoinList,
            formatNumber,
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