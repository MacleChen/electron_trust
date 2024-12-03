<template>
    <van-nav-bar :title="'Buy ' + cryptoModel.title" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <div class="content_hcenter_vcenter">

                <img :src="require('@/assets/asserts/' + currentSelectCountry.imgStr)" v-if="currentSelectCountry.imgStr != null"
                @click="countrySelectClick"
                style="height: 20px; width: 28px; padding: 7px 13px 7px 13px; background-color: #f4f4f6; border-radius: 5px;" />

                <label v-else class="global_primary_black_text_style" 
                @click="countrySelectClick"
                style="height: 20px; width: 28px; padding: 7px 13px 7px 13px; background-color: #f4f4f6; border-radius: 5px; font-size: 12px;">
                {{ currentSelectCountry.flag }}</label>

                <img src="@/assets/asserts/circled-warning-f_Normal@2x.png" 
                @click="helpInfoClick"
                style="height: 24px; width: 24px; margin-left: 20px;" />

            </div>
        </template>
    </van-nav-bar>

    <URLSessionFailed statusName="buyCrypto" v-if="networkStatus == -1"/>

    <div v-if="networkStatus == 1" style="margin-left: 15px; margin-right: 15px; margin-top: 60px; text-align: left">
        <div class="content_hleft_vcenter" style="background-color: #eceffc; border-radius: 10px; height: 50px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <img src="@/assets/asserts/icon_light_Normal@2x_1.png" width="20px" />
                <img style="margin-left: -5px;" src="@/assets/asserts/smartchain_Normal.png" width="20px" />
            </div>

            <div style="width: 75%;">
                <label class="global_primary_black_text_style" >Try Binance P2P for better quotes</label>
            </div>

            <div class="content_hleft_vcenter" style="width: 10%;">
                <img src="@/assets/asserts/close-f_Normal@2x.png" width="20px" />
            </div>
        </div>

        <div class="content_hcenter_vcenter" style="margin-top: 250px; text-align: center; width: 100%;">
            <label class="global_primary_black_text_style" style="font-size: 28px;">{{ currentSelectCountry.flag }}</label>
            <input class="global_primary_black_text_style no-border my_money_input" type="number" 
            ref="input"
            @input="adjustWidth"
            placeholder="0"
            :style="{ width: inputWidth + 'px' }"
            style="font-size: 28px;" v-model="moneyCount" label="" />
        </div>
        <div style="text-align: center;">
            <label class="global_desciption_text_style">≈0.00145 BTC</label>
        </div>

        <div class="content_hleft_vcenter" style="margin-top: 250px; background-color: #f4f4f6; border-radius: 10px; height: 60px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <img :src="require('@/assets/asserts/' + currentPayMethod.imgStr)" width="20px" />
            </div>

            <div style="width: 55%;">
                <div>
                    <label class="global_primary_black_text_style">{{ currentPayMethod.title }}</label>
                </div>

                <div style="margin-top: -5px;">
                    <label class="global_desciption_text_style">with Mercuryo</label>
                </div>
            </div>

            <div class="content_hright_vcenter" style="width: 30%; margin-right: 15px;" @click="reconmmendedClick">
                <label class="global_primary_blue_text_style" style="background-color: #dbdbf5; font-size: 10px; border-radius: 3px; height: 15px; padding-left: 5px; padding-right: 5px; margin-right: 5px;"
                    >Recommended</label>
                <img src="@/assets/asserts/chevron-right-f-24_Normal@2x.png" width="20px" height="20px"/>
            </div>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 15px;" @click="buyWithCryptoBtnClick">
            <label>Buy with {{ currentPayMethod.title }}</label>
        </div>

    </div>

    <van-action-sheet v-model:show="isShowCountrySelect" title="Networks">
        <CountrySelectAlert @valueChanged="countrySelectAlertCellClickCallback" :selectedCountry="currentSelectCountry.title" /> 
    </van-action-sheet>
</template>



<script>
import { ref } from 'vue';
import URLSessionFailed from '../../Notifications/URLSessionFailed.vue';
import { useRoute } from 'vue-router';
import CountrySelectAlert from './CountrySelectAlert.vue';
import { getLocalStorageDict, localStorageSetDict } from '@/utils/utils';

export default {
    setup() {
        const networkStatus = ref(1)
        const route = useRoute()
        const cryptoModel = ref(route.query);
        const moneyCount = ref('0')
        const inputWidth = ref(20)

        const isShowCountrySelect = ref(false)

        const currentSelectCountry = ref(getLocalStorageDict('buyCryptoCountry'))
        if (currentSelectCountry.value == null) {
            currentSelectCountry.value = {title: "USD - US Dollar", flag: '$', imgStr: 'currency_usd_Normal@2x.png'}
        }

        const currentPayMethod = ref(getLocalStorageDict('payMethod'))
        if (currentPayMethod.value == null) {
            currentPayMethod.value = {title: 'Credit card', imgStr: 'credit_cards_Normal@2x.png'}
            localStorageSetDict('payMethod', currentPayMethod.value)
        }

        return {
            networkStatus,
            cryptoModel,
            moneyCount,
            inputWidth,
            isShowCountrySelect,
            currentSelectCountry,
            currentPayMethod,
        }
    },
    components: {
        URLSessionFailed,
        CountrySelectAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        countrySelectClick() {
            this.isShowCountrySelect = true
        },
        countrySelectAlertCellClickCallback(item) {
            console.log(item.title)
            this.isShowCountrySelect = false
            this.currentSelectCountry = item
        },
        helpInfoClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-buy-cryptocurrency-using-trust-wallet' } })
        },
        adjustWidth() {
            if (this.moneyCount.length < 2) {
                this.inputWidth = 20
                return
            } 
            this.inputWidth = this.moneyCount.toString().length * 20;
        },
        reconmmendedClick() {
            this.$router.push({name: 'paymentMethodView', query: {currentSelectCountry: this.currentSelectCountry }})
        },
        buyWithCryptoBtnClick() {
            this.$router.push({name: 'payWithTransakWebView' })
        }
    }
}
</script>

<style>
.my_money_input {
    input {
    transition: width 0.2s; /* 使宽度变化更平滑 */
}
}
</style>