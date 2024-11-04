<template>
    <van-nav-bar title="Create new wallet" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 15px;">
        <div class="new_wallet_content_secret">
            <div class="content_hleft_vcenter cell_tontent_top_container" @click="showBackupViewCLick">
                <div style="width: 10%;margin-left: 10px;">
                    <div class="content_hcenter_vcenter" style="background-color: #e5e5f6; width: 40px; height: 40px; border-radius: 20px;">
                        <van-image style="transform: translateY(-2000px); filter: drop-shadow(blue 0 2000px);" :src="require('../../assets/asserts/icon-edit-quick_Normal@2x.png')" width="20px" />
                    </div>
                </div>
                
                
                <div style="width: 80%; margin-left: 20px; text-align: left;">
                    <div class="home_cell1_title" style="justify-content: left; font-size: 14px;">Secret phrase
                        <label class="home_cell_flag">+100 points</label></div>
                    <div @click="showSecretPhraseClick">
                        <label class="home_cell1_sutitle" style="font-size: 10px;">Show detail</label>
                        <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="10px" height="10px" />
                    </div>
                </div>

                <div class="content_hright_vcenter" style="width: 10%; margin-right: 10px">
                    <div style="background-color: #e5e5f6; border-radius: 5px; color: blue; font-size: 14px; font-weight: bold; padding: 10px; width: 80px;">
                        Create</div>
                </div>
            </div>

            <transition name="expand">
            <div class="cell_tontent_bottom_container" v-if="isSecretShow">
                <div style="font-size: 12px; font-weight: bold;">Security</div>
                <div style="font-size: 10px; font-weight: normal;">Create and recover wallet with a 12.18 or 24-word secret phrase. You must 
                    manually store this, or back up with iCloud storage.
                </div>
                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="font-size: 12px; font-weight: bold;">Transaction</div>
                <div style="font-size: 10px; font-weight: normal;">Transaction are available on more network (chains),
                    but requires more steps to complete.
                </div>

                <div class="content_hleft_vcenter" style="margin-top: 10px;">
                    <div style="position: absolute;">
                        <van-space>
                            <img src="../../assets/asserts/0_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/smartchain_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/60_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/polygonzkevm_Normal.png" width="15px" height="15px" />
                        </van-space>
                    </div>
                    
                    <div style="width: 100%; text-align: center; font-size: 10px; font-weight: bold; color: #8c93a0;">
                        +88 more chains
                    </div>
                </div>
                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="font-size: 12px; font-weight: bold;">Fees</div>
                <div style="font-size: 10px; font-weight: normal; padding-bottom: 10px;">Pay network fee (gas) with 
                    native tokens only. For example, if your transaction is on the Ethereum network, you can only pay 
                    for this fee with ETH.
                </div>
            </div>
            </transition>
        </div>
    </div>



    <div style="margin-left: 15px; margin-right: 15px; margin-top: 15px;">
        <div class="new_wallet_content_swift">
            <div class="content_hleft_vcenter cell_tontent_top_container" @click="showBackupViewCLick">
                <div style="width: 10%;margin-left: 10px;">
                    <div class="content_hcenter_vcenter" style="background-color: #e5e5f6; width: 40px; height: 40px; border-radius: 20px;">
                        <van-image  :src="require('../../assets/asserts/sw_icon_Normal@2x.png')" width="20px" />
                    </div>
                </div>
                
                
                <div style="width: 80%; margin-left: 20px; text-align: left;">
                    <div class="home_cell1_title" style="justify-content: left; font-size: 14px;">Swift
                        <label class="home_cell_flag" style="background-color: black;color: white;">Bata</label></div>
                    <div @click="showSwiftClick">
                        <label class="home_cell1_sutitle" style="font-size: 10px;">Show detail</label>
                        <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="10px" height="10px" />
                    </div>
                </div>

                <div class="content_hright_vcenter" style="width: 10%; margin-right: 10px">
                    <div style="background-color: #e5e5f6; border-radius: 5px; color: blue; font-size: 14px; font-weight: bold; padding: 10px; width: 80px;">
                        Create</div>
                </div>
            </div>

            <transition name="expand">
            <div class="cell_tontent_bottom_container" v-if="isSwiftShow">
                <div style="font-size: 12px; font-weight: bold;">Security</div>
                <div style="font-size: 10px; font-weight: normal;">Create and recover wallet with a 12.18 or 24-word secret phrase. You must 
                    manually store this, or back up with iCloud storage.
                </div>
                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="font-size: 12px; font-weight: bold;">Transaction</div>
                <div style="font-size: 10px; font-weight: normal;">Transaction are available on more network (chains),
                    but requires more steps to complete.
                </div>

                <div class="content_hleft_vcenter" style="margin-top: 10px;">
                    <div style="position: absolute;">
                        <van-space>
                            <img src="../../assets/asserts/0_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/smartchain_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/60_Normal.png" width="15px" height="15px" />
                            <img src="../../assets/asserts/polygonzkevm_Normal.png" width="15px" height="15px" />
                        </van-space>
                    </div>
                    
                    <div style="width: 100%; text-align: center; font-size: 10px; font-weight: bold; color: #8c93a0;">
                        +88 more chains
                    </div>
                </div>
                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="font-size: 12px; font-weight: bold;">Fees</div>
                <div style="font-size: 10px; font-weight: normal; padding-bottom: 10px;">Pay network fee (gas) with 
                    native tokens only. For example, if your transaction is on the Ethereum network, you can only pay 
                    for this fee with ETH.
                </div>
            </div>
            </transition>
        </div>

        <div class="content_hleft_vcenter" style="margin-top: 10px;">
            <img src="../../assets/asserts/circled-warning-f_Normal@2x.png" width="15px" height="15px" />
            <label style="font-weight: bold; color: #8c93a0; font-size: 10px;">
                You can create another wallet at anytime under 'Manage Wallet'.
            </label>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const passcode = route.query.passcode

        const isSecretShow = ref(false)
        const isSwiftShow = ref(false)
        return {
            passcode,
            isSecretShow,
            isSwiftShow,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        showSecretPhraseClick() {
            this.isSecretShow = !this.isSecretShow
        },
        showSwiftClick() {
            this.isSwiftShow = !this.isSwiftShow
        },
        showBackupViewCLick() {
            this.$router.push({ name: "backupWalletView" })
        }
    }
}
</script>

<style>
.new_wallet_content_secret {
    border-radius: 10px; 
    background-color: #f4f4f6;
}

.new_wallet_content_swift {
    border-radius: 10px; 
    background-color: #f4f4f6;
}

.cell_tontent_top_container {
    height: 70px;
}

.cell_tontent_bottom_container {
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
}

.expand-enter-from, .expand-leave-to {
    height: 0;
    opacity: 0;
}

.expand-enter-active, .expand-leave-active {
    transition: height 0.5s ease, opacity 0.5s ease;
}

.expand-enter-to, .expand-leave-from {
    height: 200px; /* 目标高度 */
    opacity: 1;
}
</style>