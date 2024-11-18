<template>
    <div class="content_hleft_vcenter" style="width: 100%; height: 60px; text-align: left;"
    v-for="item in cyptoCoinList" :key="item.title" @click="homeCryptoCellClick">
        <div style="width: 15%;">
            <img :src="item.imgStr" width="35px"/>
        </div>

        <div style="width: 65%;">
            <div class="content_hleft_vcenter">
                <label style="font-size: 16px; font-weight: bold;">{{ item.title }}</label>
                <label style="font-size: 12px; color: #868d9a; background-color: #f4f4f6; padding: 2px 5px 2px 5px; border-radius: 3px; margin-left: 5px;">
                    {{ item.subtitle }}</label>
            </div>

            <div>
                <label style="font-size: 12px; color: #868d9a;">${{ item.leftAllMoney }}</label>
                <label style="font-size: 10px; margin-left: 5px;" 
                :style="{color: item.percent > 0 ? '#5eba89':'red' }">{{ item.percent }}%</label>
            </div>
        </div>

        <div style="width: 20%; text-align: right;">
            <div>
                <label style="font-size: 14px; font-weight: bold;">{{ isEncryptionMoney ? "****" : item.rightTopMoney }}</label>
            </div>
            <div>
                <label style="font-size: 10px; color: #868d9a;">{{ isEncryptionMoney ? "****" : "$" + item.rightBottomMoney }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, ref, watch, defineExpose } from 'vue';
import { useRequest } from 'vue-hooks-plus';
import { formatNumber } from '@/utils/utils';

export default {
    props: {
        isEncryptionMoney: { type: Boolean },
        isNeedRefresh: { type: Boolean } 
    },
    setup(props) {
        const globarVars = inject("globalVars")

        console.log(props.isEncryptionMoney ? "1": "2")
        console.log(props.isNeedRefresh ? "1": "2")

        // watch(() => props.isEncryptionMoney, (newValue) => {
        //     showToast(newValue ? "1":"2")
        // })

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
                leftAllMoney: formatNumber(parseFloat(symbolData.lastPrice).toFixed(2)), percent: parseFloat(symbolData.priceChangePercent).toFixed(2), rightTopMoney: '0', 
                rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/' + symbolsImgNameList[i] + '.png')},)
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
                    rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/' + symbolsImgNameList[i] + '.png')},)
                }
            })
        }
        defineExpose({
            reloadCryptoListData,
        })

        return {
            cyptoCoinList,
            data,
            reloadCryptoListData,
        }
    },
    methods:{
        homeCryptoCellClick() {
            this.$router.push({name: 'cryptoDetailView'})
        }
    }
}
</script>