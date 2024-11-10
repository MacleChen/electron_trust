<template>
    <van-nav-bar title="Trust handles" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/info_Normal@3x.png" style="height: 35px; width: 35px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px; margin-left: 15px; margin-right: 15px;">
        <!-- cell1 Security Scanner -->
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Security scanner</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Show warnings for high-risk transactions.</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <van-switch v-model="isSecurityScannerChecked" />
            </div>
         </div>

         <!-- cell2 Passcode -->
         <div class="content_hleft_vcenter" style="height: 40px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Passcode</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <van-switch v-model="isPasscodeChecked" />
            </div>
         </div>

         <!-- cell3 Auto-lock -->
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Auto-lock</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Immediate</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
         </div>

         <!-- cell4 Lock method -->
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Lock method</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Passcode / Touch ID</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
         </div>

         <!-- cell5 Transaction signing -->
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Transaction signing</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Ask for approval ahead of transactions.</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <van-switch v-model="isTransactionSigningChecked" />
            </div>
         </div>

         <van-divider />

         <!-- cell6 Alow `eth_sign` -->
          <div style="text-align: left; margin-top: 30px;">
            <label class="global_desciption_text_style"> Third-party requests</label>
          </div>
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Alow `eth_sign`</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Encoded message signature requests</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <van-switch v-model="isAllowChecked" />
            </div>
         </div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isSecurityScannerChecked = ref(false)
        const isPasscodeChecked = ref(false)
        const isTransactionSigningChecked = ref(false)
        const isAllowChecked = ref(false)

        return {
            isSecurityScannerChecked,
            isPasscodeChecked,
            isTransactionSigningChecked,
            isAllowChecked
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {

        }
    }
}
</script>