<template>
    <van-nav-bar title="Payment method" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 60px; text-align: left;">

        <div>
            <label class="global_desciption_text_style">Pay with</label>
        </div>

        <div class="content_hleft_vcenter" style="width: 100%; height: 40px; border: 1px solid #d9d9d9; border-radius: 5px; margin-top: 10px;"
        @click="payWithCellClick">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <img :src="require('@/assets/asserts/' + currentPayMethod.imgStr)" width="15px" />
            </div>
            <div class="content_hleft_vcenter" style="width: 75%;">
                <label class="global_primary_black_text_style">{{currentPayMethod.title }}</label>
            </div>
            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img src="@/assets/asserts/chevron-down-f_Normal@2x.png" width="20px" />
            </div>
        </div>

        <div style="margin-top: 20px;">
            <label class="global_desciption_text_style">Provider</label>
        </div>
        <div v-for="(item, index) in providerList" :key="item.title"
            class="content_hleft_vcenter"
            style="background-color: #f4f4f6; border-radius: 10px; height: 70px;  margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width:10%">
                <img :src="require('@/assets/asserts/' + item.imgStr)" width="20px" />
            </div>

            <div style="width: 60%;">
                <div>
                    <label class="global_primary_black_text_style">{{ item.title }}</label>
                </div>
                <div v-if="index == 0">
                    <label class="global_primary_blue_text_style" style="background-color: #dbdbf5; font-size: 10px; border-radius: 3px; height: 15px; padding-left: 5px; padding-right: 5px; margin-right: 5px;"
                    >Recommended</label>
                </div>
            </div>

            <div style="width: 30%; text-align: right; margin-right: 10px;">
                <div>
                    <label class="global_primary_black_text_style">{{ item.rightTopValue }}</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">{{ item.rightBottomValue }}</label>
                </div>
            </div>
        </div>
    </div>

    <van-action-sheet v-model:show="isShowPayTypeSelect" title=" ">
        <PaymentMethodSelectAlert @valueChanged="payMethodCellClickCallback" /> 
    </van-action-sheet>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import PaymentMethodSelectAlert from './PaymentMethodSelectAlert.vue';
import { localStorageSetDict, getLocalStorageDict } from '@/utils/utils';

export default {
    setup() {
        const route = useRoute()
        const currentSelectCountry = route.query.currentSelectCountry

        const currentPayMethod = ref(getLocalStorageDict('payMethod'))

        const providerList = ref([
            {title: "Transak", rightTopValue: '≈0.00168 BTC', rightBottomValue: '≈' + currentSelectCountry.flag + '150.00', imgStr: '714_Normal.png'},
            {title: "Mercuryo", rightTopValue: '≈0.00168 BTC', rightBottomValue: '≈' + currentSelectCountry.flag + '150.00', imgStr: '714_Normal.png'},
            {title: "Binance Connect", rightTopValue: '≈0.00168 BTC', rightBottomValue: '≈' + currentSelectCountry.flag + '150.00', imgStr: '714_Normal.png'},
            {title: "Banxa", rightTopValue: '≈0.00168 BTC', rightBottomValue: '≈' + currentSelectCountry.flag + '150.00', imgStr: '714_Normal.png'},
            {title: "Simplex", rightTopValue: '≈0.00168 BTC', rightBottomValue: '≈' + currentSelectCountry.flag + '150.00', imgStr: '714_Normal.png'},
        ])

        const isShowPayTypeSelect = ref(false)

        return {
            providerList,
            isShowPayTypeSelect,
            currentPayMethod,
        }
    },
    components: {
        PaymentMethodSelectAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        payWithCellClick() {
            this.isShowPayTypeSelect = true
        },
        payMethodCellClickCallback(item) {
            this.isShowPayTypeSelect = false
            localStorageSetDict('payMethod', item)
            this.currentPayMethod = item
        }
    }
}
</script>