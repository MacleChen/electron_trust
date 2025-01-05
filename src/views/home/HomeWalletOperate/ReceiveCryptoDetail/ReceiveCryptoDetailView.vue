<template>
    <van-nav-bar title="Receive" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="@/assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px;">

        <div class="content_hleft_vcenter golbal_warning_tip_frame_style" style="line-height: 12px; height: 50px;">
            <div class="content_hleft_vtop">
                <div class="content_hright_vtop" style="width: 8%;">
                    <img src="@/assets/asserts/circled-info-f_Normal_gold@2x.png" style="height: 12px; width: 12px; margin-top: 2px; margin-right: 5px;" />
                </div>
                <div style="width: 92%; text-align: left;">
                    <label class="global_tip_gold_text_style" >Only send Fantom (FTM)assets to this address. Other assets will be lost forever.</label>
                </div>
            </div>
        </div>
            
        <div class="content_hcenter_vcenter" style="margin-top: 15px;">
            <img :src="itemData.imgName" style="height: 15px; width: 15px;" />
            <label class="global_primary_black_text_style" style="margin-left: 5px;"  >{{ itemData.title }}</label>
            <label class="global_flag_gray_text_style" style="margin-left: 5px;">{{ itemData.flag }}</label>
        </div>

        <div class="shadow-for-div" style="margin-left: 78px; margin-right: 78px; margin-top: 15px; line-height: 14px; border-radius: 10px;">
            <div>
                <GeneratorQRCode :linkText="showUrlStr" />
            </div>
            <div style="margin-top: 10px; margin-left: 10px; margin-right: 10px; padding-bottom: 10px;">
                <label class="break-text global_primary_black_small_text_style" style="width: 100%;">{{ address }}</label>
            </div>
        </div>

        <div v-if="isShowCustomMountDiv" class="content_hcenter_vcenter" style="margin-top: 20px;">
            <label class="global_primary_black_text_style">{{ amountInputText + " " }} {{ itemData.title }}</label>
            <label class="global_desciption_text_style"> &nbsp;≈&nbsp; </label>
            <label class="global_primary_gray_text_style">$10,281.54</label>
            <img src="../../../../assets/asserts/circled-close-f_Normal@2x.png" style="height: 15px; width: 15px; margin-left: 5px;" @click="amountClearBtnClick"/>
        </div>

        <div class="content_hcenter_vcenter" style="margin-top: 20px;">
            <div style="margin-right: 40px;" @click="copyBtnClick">
                <div class="content_hcenter_vcenter" style="width: 40px; height: 40px; background-color: #f4f4f6; border-radius: 20px;">
                    <img src="../../../../assets/asserts/icon-copy_Normal_dark@2x.png" style="height: 20px; width: 20px;" />
                </div>
                <div class="content_hcenter_vcenter" style="margin-top: 5px;">
                    <label class="global_primary_black_small_text_style">Copy</label>
                </div>
            </div>

            <div @click="setAmountBtnClick">
                <div class="content_hcenter_vcenter">
                    <div class="content_hcenter_vcenter" style="width: 40px; height: 40px; background-color: #f4f4f6; border-radius: 20px;">
                        <img src="../../../../assets/asserts/number-f_Normal_black@2x.png" style="height: 20px; width: 20px;" />
                    </div>
                </div>
                <div class="content_hcenter_vcenter" style="margin-top: 5px;">
                    <label class="global_primary_black_small_text_style">Set Amount</label>
                </div>
            </div>

            <div style="margin-left: 40px;" @click="shareBtnClick">
                <div class="content_hcenter_vcenter" style="width: 40px; height: 40px; background-color: #f4f4f6; border-radius: 20px;">
                    <img src="../../../../assets/asserts/share-f_Normal_black@2x.png" style="height: 20px; width: 20px;" />
                </div>
                <div class="content_hcenter_vcenter" style="margin-top: 5px;">
                    <label class="global_primary_black_small_text_style">Share</label>
                </div>
            </div>
        </div>
        

        <div class="content_hleft_vcenter" style="margin-top: 30px; background-color: #f4f4f6; border-radius: 10px; text-align: left; height: 60px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <div class="content_hcenter_vcenter" style="width: 30px; height: 30px; background-color: #c8c9f5; border-radius: 15px;">
                    <img src="../../../../assets/asserts/arrow-right-f_Normal_blue_bottom@2x.png" style="height: 16px; width: 16px;" />
                </div>
            </div>

            <div style="width: 85%;">
                <div>
                    <label class="global_primary_black_text_style">Deposit from exchange</label>
                </div>
                <div>
                    <label class="global_primary_gray_text_style">By direct transfer from your account</label>
                </div>
            </div>
        </div>
    </div>

    <van-dialog
        use-slot
        title="Enter Amount"
        :show="isShowAmountInputAlert"
        show-cancel-button
        overlay
        cancel-button-text="Cancel"
        confirm-button-text="Confirm"
        @cancel="amountAlertCloseBtn"
        @confirm="amountAlertConfirmBtnClick"
        >
        <div class="content_hleft_vcenter" style="border: #d9d9d9 solid 1px; border-radius: 6px; height: 30px; margin: 15px 15px 15px 15px;">
            <input class="global_primary_black_text_style no-border" type="number"
            style="margin-left: 10px; width: 90%;" v-model="amountInputText" label="" placeholder=""/>
        </div>
    </van-dialog>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import GeneratorQRCode from './GeneratorQRCode.vue';
import { getUserData } from '@/utils/utils';
import useClipboard from 'vue-clipboard3';
import { showToast } from 'vant';

export default {
    setup() {
        const route = useRoute()
        const itemData = ref(JSON.parse(route.query.itemData))
        const showUrlStr = "https://www.baidu.com"

        const userData = getUserData()
        const address = ref(userData.account.address)

        const isShowAmountInputAlert = ref(false)
        const isShowCustomMountDiv = ref(false)
        const amountInputText = ref('')

        return {
            itemData,
            showUrlStr,
            address,
            isShowAmountInputAlert,
            isShowCustomMountDiv,
            amountInputText
        }
    },
    components: {
        GeneratorQRCode,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-receive-crypto-using-trust-wallet' } })
        },
        copyBtnClick() {
            showToast({message: 'Address copied:' + this.address, position: 'bottom'})
            this.isShowYourAddress = false

            const { toClipboard } = useClipboard()
            const copy = async (text) => {
                try {
                    await toClipboard(text)
                } catch (e) {
                    console.error(e)
                }
            }
            copy(this.address)
        },
        setAmountBtnClick() {
            this.isShowAmountInputAlert = true
        },
        amountAlertCloseBtn() {
            this.isShowAmountInputAlert = false
        }, 
        amountAlertConfirmBtnClick() {
            this.isShowAmountInputAlert = false
            if (this.amountInputText != "") {
                this.isShowCustomMountDiv = true
            } else {
                this.isShowCustomMountDiv = false
            }
        },
        shareBtnClick() {

        },
        amountClearBtnClick() {
            this.amountInputText = ""
            this.isShowCustomMountDiv = false
        }
    }
}
</script>