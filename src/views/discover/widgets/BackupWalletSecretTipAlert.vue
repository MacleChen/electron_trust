<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-bottom: 100px">
        <div class="wallet_alert_top_img">
            <img src="../../../assets/asserts/tw-security_Normal@2x.png" width="143" />
        </div>

        <h3>This secret phrase is the master key to your wallet</h3>
        <h6>Tap on all checkboxes to confirm you understand the importance of your secret phrase</h6>

        <div class="content_hleft_vtop" style="background-color: #f4f4f6; border-radius: 15px; padding: 10px;" 
        :style="{opacity: stepOneOpacity}"
        @click="stepOneDivClick">
            <div class="content_hleft_vtop" style="width: 8%;">
                <!-- 1 -->
                <img src="../../../assets/asserts/circled-checkmark-f_Normal@2x.png" width="20px" height="20px" />
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px; font-weight: bolder;">
                    Trust Wallet does not keep a copy of your secret phrase.
            </label>
            </div>
        </div>

        <div class="content_hleft_vtop" style="background-color: #f4f4f6; border-radius: 15px; padding: 10px; margin-top: 15px;"
        :style="{opacity: stepTwoOpacity}"
        @click="stepTwoDivClick">
            <div class="content_hleft_vtop" style="width: 8%;">
                <!-- 2 -->
                <img src="../../../assets/asserts/circled-checkmark-f_Normal@2x.png" width="20px" height="20px" />
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px; font-weight: bolder;">
                    Saving this digitally in plain text is NOT recommended. Examples include screenshots, text files,
                    or emailing yourself
            </label>
            </div>
        </div>


        <div class="content_hleft_vtop" style="background-color: #f4f4f6; border-radius: 15px; padding: 10px; margin-top: 15px;"
        :style="{opacity: stepThreeOpacity}"
        @click="stepThreeDivClick">
            <div class="content_hleft_vtop" style="width: 8%;">
                <!-- 3 -->
                <img src="../../../assets/asserts/circled-checkmark-f_Normal@2x.png" width="20px" height="20px" />
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px; font-weight: bolder;">
                    Write down your secret phrase, and store it in a secure offline location!
            </label>
            </div>
        </div>

        
        
        <div class="content_hcenter_vcenter" v-if="stepOneOpacity == 1 && stepTwoOpacity == 1 && stepThreeOpacity == 1"
        @click="contineBtnClick"
            style="background-color: blue; width: 100%; height: 50px; border-radius: 25px; color: white; font-size: 14px; font-weight: bold; margin-top: 45px;">
                Continue
        </div>
        <div class="content_hcenter_vcenter" v-else
            style="background-color: #f4f4f6; width: 100%; height: 50px; border-radius: 25px; color: lightgray; font-size: 14px; font-weight: bold; margin-top: 45px;">
                Continue
        </div>
        
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
    setup() {
        const stepOneOpacity = ref(0.5)
        const stepTwoOpacity = ref(0.5)
        const stepThreeOpacity = ref(0.5)

        return {
            stepOneOpacity,
            stepTwoOpacity,
            stepThreeOpacity
        }
    },
    components: {
    },
    methods: {
        stepOneDivClick() {
            this.stepOneOpacity = this.stepOneOpacity == 1 ? 0.5 : 1
        },
        stepTwoDivClick() {
            this.stepTwoOpacity = this.stepTwoOpacity == 1 ? 0.5 : 1
        },
        stepThreeDivClick() {
            this.stepThreeOpacity = this.stepThreeOpacity == 1 ? 0.5 : 1
        },
        contineBtnClick() {
            if (this.stepOneOpacity == 1 && this.stepTwoOpacity == 1 && this.stepThreeOpacity == 1) {
                this.$emit('valueChanged')
            }
        }
    }
}
</script>

<style>
.wallet_alert_top_img {
    margin-bottom: 20px;
}
</style>