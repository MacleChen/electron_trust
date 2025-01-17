<template>
    <div class="content_hleft_vcenter" style="width: 100%; height: 60px; text-align: left;"
    v-for="item in cyptoCoinList" :key="item.title" @click="homeCryptoCellClick(item)">
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
        const symbolsIDList = selSymbolsList.map((bitCoinModal) => bitCoinModal.id )

        // 请求币的市场列表
        var { data } = useRequest(() => {
            return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + symbolsIDList.join(',')).then(res => res.json());
        })
        watch(data, (newValue) => {
            for(var i = 0; i < newValue.length; i++) {
                const symbolData = newValue[i]
                cyptoCoinList.value.push({id: symbolData.id, title: symbolData.symbol.toUpperCase(), subtitle: symbolData.name, 
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
                    cyptoCoinList.value.push({id: symbolData.id, title: symbolData.symbol.toUpperCase(), subtitle: symbolData.name, 
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
            data,
            reloadCryptoListData,
        }
    },
    methods:{
        homeCryptoCellClick(item) {
            this.$router.push({name: 'cryptoDetailView', query: {cyptoData: JSON.stringify(item)}})
        }
    }
}
</script>