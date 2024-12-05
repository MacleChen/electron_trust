<template>
    <van-nav-bar :title="dataDict.flag + '(' + dataDict.title + ')'" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px;">
        <div style="background-color: #f4f4f6; border-radius: 5px;">
            <div class="content_hleft_vcenter" style="margin-left: 15px; margin-right: 15px; height: 40px;">
                <div style="width: 50%; text-align: left;">
                    <label class="global_desciption_text_style" style="font-weight: bold;">Available</label>
                </div>

                <div style="width: 50%; text-align: right;">
                    <label class="global_desciption_text_style" style="color: black; font-weight: bold;">0 {{ dataDict.title }}</label>
                </div>
            </div>

            <div class="content_hleft_vcenter" style="margin-left: 15px; margin-right: 15px; height: 40px;">
                <div style="width: 50%; text-align: left;">
                    <label class="global_desciption_text_style" style="font-weight: bold;">Staked</label>
                </div>

                <div style="width: 50%; text-align: right;">
                    <label class="global_desciption_text_style" style="color: black; font-weight: bold;">0 {{ dataDict.title }}</label>
                </div>
            </div>

            <div class="content_hleft_vcenter" style="margin-left: 15px; margin-right: 15px; height: 40px;">
                <div style="width: 50%; text-align: left;">
                    <label class="global_desciption_text_style" style="font-weight: bold;">Minimum Amount</label>
                </div>

                <div style="width: 50%; text-align: right;">
                    <label class="global_desciption_text_style" style="color: black; font-weight: bold;">0.025 {{ dataDict.title }}</label>
                </div>
            </div>

            <div class="content_hleft_vcenter" style="margin-left: 15px; margin-right: 15px; height: 40px;">
                <div style="width: 50%; text-align: left;">
                    <label class="global_desciption_text_style" style="font-weight: bold;">APR</label>
                </div>

                <div style="width: 50%; text-align: right;">
                    <label class="global_desciption_text_style" style="color: black; font-weight: bold;">{{ dataDict.percent }}%</label>
                </div>
            </div>

            <div class="content_hleft_vcenter" style="margin-left: 15px; margin-right: 15px; height: 40px;">
                <div class="content_hleft_vcenter" style="width: 50%; text-align: left;" @click="navBarRightClick">
                    <label class="global_desciption_text_style" style="font-weight: bold;">Lock Time</label>
                    <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 15px; width: 15px;" />
                </div>

                <div style="width: 50%; text-align: right;">
                    <label class="global_desciption_text_style" style="color: black; font-weight: bold;">-4 days</label>
                </div>
            </div>
        </div>

        <div class="content_hleft_vcenter" style="border-bottom: #f4f4f6 solid 1px; height: 40px; margin-top: 15px" @click="stakeNextCellClick">
            <div style="width: 50%; text-align: left;">
                <label class="global_primary_blue_text_style">Stake</label>
            </div>

            <div class="content_hright_vcenter" style="width: 50%; text-align: right;">
                <img src="../../../assets/asserts/chevron-right-f-24_Normal@2x.png" style="height: 15px; width: 15px;" />
            </div>
        </div>

        <div class="content_hleft_vcenter" style="background-color: #fcf9f0; border-radius: 5px; text-align: left; height: 30px; margin-top: 15px;">
            <label class="global_tip_gold_text_style" style="margin-left: 15px;">• Stake at least 0.025 ETH to be eligible for points.</label>
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
        
        return {
            dataDict,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-stake-ethereum-eth-using-trust-wallet' } })
        },
        stakeNextCellClick() {
            this.$router.push({ name: 'stakeInputAmountView', query: { dataDict: JSON.stringify(this.dataDict) }})
        }
    }
}
</script>