<template>
    <van-nav-bar title="Wallets" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/plus-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
        </template>
    </van-nav-bar>
    
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 70px; text-align: left;">
        <div>
            <label class="global_primary_gray_text_style">Multi-coin Wallets</label>
        </div>

        <div style="background-color: #f4f4f6; border-radius: 10px; margin-top: 5px; padding-bottom: 10px;">
            <div class="content_hleft_vcenter" style="margin-left: 5px; margin-right: 15px; height: 50px;">
                <div class="content_hcenter_vcenter" style="width: 10%;">
                    <img src="../../../assets/asserts/trust_icon_Normal@2x.png" width="20px" />
                    <img style="position: fixed; margin-top: -8px; margin-left: 6px;" 
                    src="../../../assets/asserts/success-icon_Normal_midblack@2x.png" width="5px" />
                </div>

                <div style="width: 80%;">
                    <div>
                        <label class="global_primary_black_text_style">Main Wallet</label>
                    </div>
                    <div>
                        <label class="global_desciption_text_style">Multi-coin wallet</label>
                    </div>
                </div>

                <div style="width: 10%; text-align: right;">
                    <img src="../../../assets/asserts/menu-dots-f_Normal@2x.png" width="20px" />
                </div>
            </div>

            <div style="margin-left: 15px; margin-top: 10px;">
                <label class="global_primary_blue_text_style">Back up manually</label>
            </div>
            <div style="margin-left: 15px; margin-top: 10px;">
                <label class="global_primary_blue_text_style">Back up to iCloud</label>
            </div>
        </div>
    </div>
    
</template>

<script>
import { inject } from 'vue';

export default {
    setup() {
        const globalVars = inject("globalVars")

        return {
            globalVars,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.globalVars.isShowCreateImportWalletAlert = true;
        }
    }
}
</script>

<style>
</style>