<template>
    <van-nav-bar :title="walletName" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px; margin-left: 15px;margin-right: 15px; text-align: left;">
        <div>
            <label class="global_desciption_text_style">Wallet name</label>
        </div>
        <div class="content_hleft_vcenter" style="border: #ebebeb solid 1px; border-radius: 5px; height: 40px; margin-top: 5px;">
            <input class="global_primary_black_text_style no-border" type="text"
            style="margin-left: 10px; width: 90%;"
            v-model="inputWalletName"  
            placeholder="Wallet name"/>
            <div class="content_hcenter_vcenter" style="width: 10%; " @click="walletNameCloseClick">
                <img v-if="inputWalletName.length > 0" src="../../../assets/asserts/circled-close-f_Normal@2x.png" width="18px" />
            </div>
        </div>
        <div v-if="inputWalletName == null">
            <label style="font-size: 10px; color: red;">This field is required</label>
        </div>
        
        <div style="margin-top: 20px;">
            <label class="global_desciption_text_style">Secret phrase</label>
        </div>
        <div style="border: #ebebeb solid 1px; border-radius: 5px; height: 150px; margin-top: 5px;">
            <textarea class="global_primary_black_text_style no-border" type="text" cols="39" rows="7"
            style="margin-left: 10px; margin-top: 10px; resize: none;"
            v-model="secretPhraseStr"  
            placeholder=""></textarea>
            <div class="global_primary_blue_text_style" style="text-align: right; margin-right: 10px; margin-top: -30px;">Paste</div>
        </div>

        <div style="margin-top: 10px; margin-left: 30px; margin-right: 30px; text-align: center;">
            <label class="global_desciption_text_style">Typicall 12 (sometimes 18, 24) words separated by single spaces</label>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 330px;" 
        @click="restoreWalletBtnClick"
        :style="{backgroundColor: secretPhraseStr == '' ? '#ebecf0' : '#0400f4', color: secretPhraseStr == '' ? '#c0c1c5' : 'white'}">
            <label>Restore wallet</label>
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <label class="global_primary_blue_text_style">What is a secret phrase?</label>
        </div>

    </div>
</template>

<script>
import { showToast } from 'vant';
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
    validateMnemonic,
} from 'web-bip39';
import wordlist from 'web-bip39/wordlists/english';
import { createBitcoinWallet } from '@/services/wallet';
import { saveUserData } from '@/utils/utils';
import { getMyWeb3 } from '@/services/wallet';

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const walletName = ref(route.query.walletName)
        const inputWalletName = ref('Main Wallet')
        const secretPhraseStr = ref('')

        const globalVars = inject("globalVars")

        async function myValidateMnemonic(mnemonic) {
            const isValide = await validateMnemonic(mnemonic, wordlist)
            if (isValide) {
                globalVars.secretPhraseStr = secretPhraseStr.value
                localStorage.setItem("words", secretPhraseStr.value)
                localStorage.setItem("isBackup", true)
                globalVars.isBackupPhrase = true

                

                const walletData = createBitcoinWallet(secretPhraseStr.value, inputWalletName.value)

                // web3 
                const web3 = getMyWeb3()
                const userAccount = web3.eth.accounts.privateKeyToAccount(walletData.privateKey)

                const userData = {userId: walletData.privateKey, wallets:[walletData], account: userAccount}
                saveUserData(userData)

                router.push({name: "home"})
            }
            
            return isValide
        }

        return {
            walletName,
            inputWalletName,
            secretPhraseStr,
            myValidateMnemonic,
            globalVars
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {

        },
        walletNameCloseClick() {
            this.inputWalletName = ''
        },
        restoreWalletBtnClick() {
            if (this.inputWalletName == null || this.inputWalletName == '') {
                showToast("Please Input Wallet Name.")
                return
            }

            const phraseList = this.secretPhraseStr.split(' ')
            if (phraseList.length == 12 || phraseList.length == 18 || phraseList.length == 24) {
                this.myValidateMnemonic(this.secretPhraseStr).then(function (isValide) {
                    if (isValide) {
                        showToast(" Your Secret Phrase is valide.")
                    } else {
                        showToast("Secret Phrase is not valide.")
                    }
                })
            } else {
                showToast("Secret Phrase is not correct.")
            }
        }
    }
}
</script>