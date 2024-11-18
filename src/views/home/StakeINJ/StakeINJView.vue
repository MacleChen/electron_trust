<template>
    <van-nav-bar title="Stake INJ" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <div class="content_hleft_vcenter">
                <img src="../../../assets/asserts/back-icon_blue@3x.png" style="height: 16px; width: 9px;" />
            <label class="global_main_blue_text_color" style="margin-left: 5px; margin-top: 2px;">Wallet</label>
            </div>
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-top: 50px; margin-right: 15px; text-align: left">
        <div>
            <label class="global_desciption_text_style">Amount to stake</label>
        </div>
        <div class="content_hleft_vcenter"  style="border: #ebebeb solid 1px; border-radius: 5px; height: 40px; margin-top: 5px;">
            <input class="global_primary_black_text_style no-border" type="number"
            style="margin-left: 10px; width: 90%;" v-model="amountValue" label="" placeholder="INJ Amount"/>
            <label class="global_main_blue_text_color" style="font-size: 12px; padding: 10px;">Max</label>
        </div>
        <div>
            <label class="global_desciption_text_style" style="font-size: 10px;">Available:0 INJ</label>
        </div>

        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style">Validator</label>
        </div>
        <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 10px; height: 40px;">
            <div class="content_hleft_vcenter" style="width: 50%;">
                <img src="../../../assets/asserts/icon_light_Normal@2x.png" width="10px"  style="padding-left: 15px; padding-right: 5px;"/>
                <label class="global_primary_black_text_style">Trust Nodes</label>
            </div>

            <div class="content_hright_vcenter"  style="width: 50%; text-align: right;">
                <label class="global_primary_black_text_style" style="color: #5eba89;">12.49% ARP</label>
                <img src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png" width="5px" height="10px" style="padding-left: 10px; padding-right: 15px;"/>
            </div>
        </div>

        <div style="background-color: #fcf9f0; border-radius: 5px; margin-top: 10px; padding: 10px;">
            <div class="content_hleft_vcenter" >
                <label style="width: 4px; height: 4px; background-color: #e8ba42; border-radius: 2px; margin-right: 3px"></label>
                <label class="global_desciption_text_style" style="font-size: 11px; color: #e8ba42;">Staked funds are accessible 21 days after unstaking</label>
            </div>
            <div class="content_hleft_vtop" style="margin-right: 40px;">
                <div style="width: 4px; height: 4px; background-color: #e8ba42; border-radius: 2px; margin-top: 5px;">
                </div>
                <div style="line-height: 13px; width: 250px; margin-left: 3px;">
                    <label class="global_desciption_text_style" style="font-size: 11px; color: #e8ba42;">You can unstake or redelegate at any time; normal network fees apply</label>
                </div>
            </div>
        </div>

        <div class="content_hcenter_vcenter" @click="backupContinueClick"
            style="background-color: blue; width: 100%; height: 50px; border-radius: 25px; color: white; font-size: 14px; font-weight: bold; margin-top: 400px;">
                Continue
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const amountValue = ref('')

        return {
            amountValue,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-stake-injective-inj-and-earn-rewards-using-trust-wallet' } })
        },
        backupContinueClick() {

        }
    }
}
</script>