<template>
    <van-nav-bar :title="'Stake ' + dataDict.title" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px; text-align: left;">
        <div>
            <label class="global_primary_gray_text_style">Amount to stake</label>
        </div>

        <div class="content_hleft_vcenter" style="border-radius: 5px; border: #f4f4f6 solid 1px; margin-top: 5px; height: 40px;">
            <input class="sub_title_text_style no-border my_tab_exchange_input" type="number" 
                ref="input"
                placeholder="ETH Amount"
                style="margin-left: 10px; width: 86%; font-size: 16px; background: transparent; color: black;" v-model="moneyCount" label="" />

                <label class="global_primary_blue_text_style">Max</label>
        </div>
        <div v-if="errorInfo != ''" style="text-align: left;">
            <label class="global_input_error_tip_text_style">{{ errorInfo }}</label>
        </div>
        <div>
            <label class="global_desciption_text_style">Available:0 ETH</label>
        </div>

        <div style="margin-top: 20px;">
            <label class="global_primary_gray_text_style">Validator</label>
        </div>
        <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 5px; height: 40px;" @click="trustNodesCellClick">
            <div class="content_hleft_vcenter" style="width: 50%; margin-left: 15px;">
                <img src="../../../assets/asserts/trust_icon_Normal@2x_1.png" style="height: 15px; width: 15px;" />
                <label class="global_big_primary_black_text_style" style="margin-left: 5px;">Trust Nodes</label>
            </div>

            <div class="content_hright_vcenter" style="width: 50%; margin-right: 15px;">
                <label class="global_primary_gray_text_style" style="color: green; margin-right: 5px">4.03% APR</label>
                <img src="../../../assets/asserts/chevron-right-f-24_Normal@2x.png" style="height: 15px; width: 15px;" />
            </div>
        </div>

        <div class="content_hleft_vcenter" style="background-color: #fcf9f0; border-radius: 5px; text-align: left; margin-top: 30px; padding-top: 10px; padding-bottom: 10px;">
            <label class="global_tip_gold_text_style" style="margin-left: 15px;">
                • Rewards are calculated and credited after unstake<br>
                • Earning starts one day after staking<br>
                • Staked funds are accessible ~4 days after unstaking<br>
                • You can unstake any time<br>
                • Normal network fees apply<br>
                • ETH pooled staking provided by Kiln<br>
                • APR is an estimate and may fluctuate<br>
            </label>
        </div>

        <div class="global_primary_button_div_style" style="position:fixed; left: 15px; right: 15px; bottom: 15px;" @click="continueBtnClick">
            <label>Continue</label>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        let dataDict = ref(JSON.parse(route.query.dataDict))
        const errorInfo = ref('This field is required')
        
        return {
            dataDict,
            errorInfo
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-stake-ethereum-eth-using-trust-wallet' } })
        },
        continueBtnClick() {

        },
        trustNodesCellClick() {
            this.$router.push({ name: 'providersView', query: { dataDict: JSON.stringify(this.dataDict) }})
        }
    }
}
</script>