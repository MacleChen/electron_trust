<template>
    <van-nav-bar title="Stake INJ" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #title>
            <div>
                <div>
                    <label class="global_primary_black_text_style">{{ cyptoItem.title }}</label>
                </div>

                <div style="margin-top: -5px;">
                    <label class="global_desciption_text_style">COIN</label>
                    <van-divider vertical />
                    <label class="global_desciption_text_style">{{ cyptoDetail?.name }}</label>
                </div>
            </div>
        </template>
        <template #right>
            <div class="content_hright_vcenter">
                <img :src="isTurnOpenNotification ? require('../../../assets/asserts/icon-notifications_Normal_blue@2x.png') : require('../../../assets/asserts/notification-off-f_Normal@2x.png')" 
                style="height: 20px; width: 20px;" @click="naviRightNotificationClick"/>
                <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" @click="naviRightInfoClick"
                style="height: 20px; width: 20px; margin-left: 20px;" />
            </div>
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px;">
        <div v-if="cyptoItem.title == 'BTC'" class="content_hleft_vtop" style="background-color: #fcf9f0; border-radius: 5px; margin-top: 10px; padding: 10px; text-align: left; line-height: 15px;">
            <div class="content_hcenter_vtop" style="width: 8%;">
                <img src="../../../assets/asserts/circled-info-f_Normal_gold@2x.png" width="15px" />
            </div>
            <div style="width: 80%;">
                <div>
                    <label class="global_desciption_text_style" style="font-size: 11px; color: #e8ba42;">BTC Network Congestion Issue - Expect slow balance update.</label>
                </div>
                <div>
                    <label class="global_desciption_text_style" style="font-size: 11px; color: #e8ba42;">BTC fees may increase during network congestion. Trust Wallet gains no benefit. Tap the gas icon below to view estimated transaction costs.</label>
                </div>
                <div class="content_hleft_vcenter">
                    <label class="global_desciption_text_style" style="font-size: 11px; color: #0400f4;"
                    @click="leanMoreBtnClick"
                    >Learn more</label>
                    <img src="../../../assets/asserts/chevron-right-f-24_Normal_blue@2x.png" width="15px" height="15px" />
                </div>
            </div>
        </div>

        <div class="content_hleft_vcenter" :style="{marginTop: cyptoItem.title == 'BTC' ? '10px':'60px'}">
            <img src="../../../assets/asserts/gas-station_Normal_blue@2x.png" width="17px" />
            <label class="global_primary_black_text_style" style="font-size: 12px">${{ gasValue }}</label>
        </div>

        <div style="text-align: center; margin-top: -15px;">
            <div>
                <img :src="cyptoItem.imgStr" width="40px" />
            </div>
            <div>
                <label class="global_big_primary_black_text_style">0 {{ cyptoItem.title }}</label>
            </div>
            <div>
                <label class="global_desciption_text_style">≈ $0.00</label>
            </div>
        </div>

        <!-- trade button -->
     <div class="content_hcenter_vcenter" style="margin-top: 25px;">
        <div @click="sendCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../../assets/asserts/Vector_Normal_black_up@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Send</div>
        </div>

        <div style="margin-left: 20px;" @click="receiveCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../../assets/asserts/Vector_Normal_black_down@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Receive</div>
        </div>

        <div style="margin-left: 20px;" @click="buyCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../../assets/asserts/icon-card_Normal_black@2x.png" width="20px"/>
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Buy</div>
        </div>

        <div style="margin-left: 20px;" @click="sellCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../../assets/asserts/bank-f_Normal_black@2x_1.png" width="20px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Sell</div>
        </div>

        <div style="margin-left: 20px;" @click="historyCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../../assets/asserts/icon-history_Normal_black@2x.png" width="20px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">History</div>
        </div>
     </div>

     <van-divider />

     <CryptoDetailEmpty :cryptoTitle="cyptoItem.title" @valueChanged="cryptoDetailEmptyBuyBtnClick"/>

     <!-- fix bottom view -->
      <div style="text-align: left; height: 80px; position: absolute; bottom: 15px; left: 15px; right: 15px;">
        <van-divider />
        <div style="margin-top: -10px;">
            <label class="global_desciption_text_style" style="font-size: 11px;">Current {{ cyptoItem.title }} price</label>
        </div>
        <div class="content_hleft_vcenter">
            <div class="content_hleft_vcenter" style="width: 90%;">
                <label class="global_primary_black_text_style">${{ cyptoItem.leftAllMoney }}</label>
                <label class="global_primary_black_text_style" style="margin-left: 5px; margin-right: -30px;" :style="{color: cyptoItem.percent > 0 ? 'green':'red'}">
                    {{ cyptoItem.percent > 0 ? '+':'' }}{{ cyptoItem.percent }}%</label>
                
                <div style="width: 100px; height: 30px;">
                    <CryptoLiteChartLine :cryptoData="JSON.stringify(cyptoItem)"/>
                </div>
            </div>
            <div style="width: 10%; text-align: right;" @click="bottomChartRightArrowClick">
                <img src="../../../assets/asserts/chevron-up-f_Normal@2x.png" width="15px" height="15px" />
            </div>
        </div>
      </div>
    </div>

    <van-action-sheet v-model:show="isShowChartLineAlert" :title="'Current ' + cyptoItem.title + ' price'">
        <CryptoDetailCharLineAlert :cryptoData="JSON.stringify(cyptoItem)" /> 
    </van-action-sheet>
</template>

<script>
import { ref, watch } from 'vue';
import CryptoDetailEmpty from './CryptoDetailEmpty.vue';
import { useRoute } from 'vue-router';
import { useRequest } from 'vue-hooks-plus';
import CryptoLiteChartLine from './CryptoLiteChartLine.vue';
import CryptoDetailCharLineAlert from './CryptoDetailCharLineAlert.vue';
export default {
    setup() {
        const isTurnOpenNotification = ref(false)
        const cyptoItem = ref(JSON.parse(useRoute().query.cyptoData))
        const cyptoDetail = ref(null)
        const gasValue = ref(Math.random() * (10 - 1) + 1)
        gasValue.value = gasValue.value.toFixed(2)

        const isShowChartLineAlert = ref(false)

        // 请求币的市场列表
        var { data } = useRequest(() => {
            return fetch('https://api.coingecko.com/api/v3/coins/' + cyptoItem.value.id).then(res => res.json());
        })
        watch(data, (newValue) => {
            cyptoDetail.value = newValue
        })

        return {
            isTurnOpenNotification,
            cyptoItem,
            cyptoDetail,
            gasValue,
            isShowChartLineAlert,
        }
    },
    components: {
        CryptoDetailEmpty,
        CryptoLiteChartLine,
        CryptoDetailCharLineAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        naviRightNotificationClick() {

        },
        naviRightInfoClick() {
            this.$router.push({name: "cryptoDetailMoreView", query: {cyptoData: JSON.stringify(this.cyptoItem), cyptoDetail: JSON.stringify(this.cyptoDetail)}})
        }, 
        leanMoreBtnClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/addressing-blockchain-congestion' } })
        },
        cryptoDetailEmptyBuyBtnClick() {
            alert('buy')
        },
        bottomChartRightArrowClick() {
            this.isShowChartLineAlert = true
        }

    }
}
</script>