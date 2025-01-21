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
            <label style="font-size: 10px; font-weight: bold; color: blue;" @click="copyToClipboardBtnClick">Copy to Clipboard</label>
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
import { ref, inject } from 'vue';
const bip39 = require('bip39')
import { createBitcoinWallet } from '@/services/wallet';
import { saveUserData } from '@/utils/utils';

import ShowWarningGoldMessageTip from '../discover/widgets/ShowWarningGoldMessageTip.vue';
import BackupWalletManuallyAlert from '../discover/widgets/BackupWalletManuallyAlert.vue';
import { getMyWeb3 } from '@/services/wallet';
import { MultiWalletManager } from '@/services/MultiWalletManager';
import { showToast } from 'vant';
import useClipboard from 'vue-clipboard3';


export default {
    setup() {
        const globalVars = inject("globalVars")

        const isWalletManuallyAlertShow = ref(false)
        const secretPhraseList = ref([])
        const secretPhraseStr = ref('')
        
        async function loadWords() {
            const myWords = bip39.generateMnemonic()
            globalVars.secretPhraseStr = myWords
            localStorage.setItem("words", myWords)
            secretPhraseList.value = myWords.split(' ')

            // 创建多币钱包
            const walletData = createBitcoinWallet(myWords)     // 创建bitcoin
            const walletManager = new MultiWalletManager();     // 创建 其他多币钱包
            walletManager.createWallets(myWords);
            const result = walletManager.getWallets();
            secretPhraseStr.value = result.mnemonic

            // web3 
            const web3 = getMyWeb3()
            const userAccount = web3.eth.accounts.privateKeyToAccount(walletData.privateKey)

            const userData = {userId: walletData.privateKey, mainWallet: walletData, wallets: result.wallets, account: userAccount, mnemonic: result.mnemonic}
            saveUserData(userData)
        }
        loadWords()
        return {
            secretPhraseList,
            isWalletManuallyAlertShow,
            secretPhraseStr,
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
        }, 
        copyToClipboardBtnClick() {
            const { toClipboard } = useClipboard()
            const copy = async (text) => {
                try {
                    await toClipboard(text)
                } catch (e) {
                    console.error(e)
                }
            }
            copy(this.secretPhraseStr)
            showToast("Already copied")
        }
    }
}
</script>