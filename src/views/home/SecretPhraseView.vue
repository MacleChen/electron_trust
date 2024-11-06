<template>
    <van-nav-bar title="Secret phrase" @click-left="navBarLeftClick" @click-right="navBarRightClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 

    <div style="margin-left: 20px; margin-right: 20px;">
        <van-grid :column-num="2" :gutter="-15" :border="false">
            <van-grid-item v-for="(item, index) in secretPhraseList" :key="item">
                <div class="content_hcenter_vcenter" style="background-color: #dbdce4; border-radius: 5px; width: 100%; height: 30px;">
                    <label style="font-size: 12px; font-weight: bold;">{{ index + 1 + '. ' + item }}</label>
                </div>
            </van-grid-item>
        </van-grid>

        <div class="content_hcenter_vcenter" style="margin-top: 10px;">
            <img src="../../assets/asserts/icon-copy_Normal@2x.png" style="height: 15px; width: 15px; margin-right: 5px; transform: translateY(-2000px); filter: drop-shadow(blue 0 2000px);" />
            <label style="font-size: 10px; font-weight: bold; color: blue;">Copy to Clipboard</label>
        </div>

        <div class="content_hcenter_vbottom" style="width: 100%; height: 450px;">
            <div>
                <ShowWarningGoldMessageTip @valueChanged="showWarningGoldMessageTipClick" />

                <div class="content_hcenter_vcenter" @click="secretPhraseContinueClick"
                style="background-color: blue; width: 100%; height: 50px; border-radius: 25px; color: white; font-size: 14px; font-weight: bold; margin-top: 25px;">
                    Continue
                </div>
            </div>
        </div>
    </div>
    

    
    <van-action-sheet v-model:show="isWalletManuallyAlertShow" title=" ">
        <BackupWalletManuallyAlert @valueChanged="secretTipAlertContinueClick" /> 
    </van-action-sheet>
    
</template>

<script>
import { ref } from 'vue';
import { generateMnemonic } from '@/utils/mnemonic';
import ShowWarningGoldMessageTip from '../discover/widgets/ShowWarningGoldMessageTip.vue';
import BackupWalletManuallyAlert from '../discover/widgets/BackupWalletManuallyAlert.vue';
import { showToast } from 'vant';


export default {
    setup() {
        const isWalletManuallyAlertShow = ref(false)
        const secretPhraseList = ref([])
        const secretPraseStr = generateMnemonic()
        showToast(secretPraseStr)
        return {
            secretPhraseList,
            isWalletManuallyAlertShow,
        }
    },
    components: {
        ShowWarningGoldMessageTip,
        BackupWalletManuallyAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://sunpump.meme/?utm_source=Trust_iOS_Browser' } })
        },
        showWarningGoldMessageTipClick() {
            this.isWalletManuallyAlertShow = true
        },
        secretTipAlertContinueClick() {
            this.isWalletManuallyAlertShow = false
        },
        secretPhraseContinueClick() {
            this.$router.push( {name: "confirmSecretPhraseView" })
        }
    }
}
</script>