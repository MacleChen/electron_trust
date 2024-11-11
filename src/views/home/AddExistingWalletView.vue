<template>
    <van-nav-bar title="Add existing wallet" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="margin-left: 15px; margin-top: 60px; margin-right: 15px">
        <!-- cell1 -->
        <div class="content_hleft_vcenter" 
        @click="secretPhraseCellClick"
        style="background-color: #f4f4f6; border-radius: 10px; height: 70px; text-align: left">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <div class="content_hcenter_vcenter" style="background-color: #e7e6f6; width: 30px; height: 30px; border-radius: 15px;">
                    <img src="../../assets/asserts/sw_icon_Normal@2x.png" width="17px" />
                </div>
            </div>

            <div style="width: 75%;">
                <div class="content_hleft_vcenter">
                    <label class="global_primary_black_text_style">Secret phrase</label>
                    <label class="global_flag_gray_text_style" style="background-color: #dddbe9; margin-left: 5px">+100 points*</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Use a 12, 18 or 24-word seed phrase</label>
                </div>
            </div>

            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>

        <!-- cell2 -->
        <div class="content_hleft_vcenter" 
        @click="swiftCellClick"
        style="background-color: #f4f4f6; border-radius: 10px; height: 70px; text-align: left; margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <div class="content_hcenter_vcenter" style="background-color: #e7e6f6; width: 30px; height: 30px; border-radius: 15px;">
                    <img src="../../assets/asserts/sw_icon_Normal@2x.png" width="17px" />
                </div>
            </div>

            <div style="width: 75%;">
                <div class="content_hleft_vcenter">
                    <label class="global_primary_black_text_style">Swift</label>
                    <label class="global_flag_gray_text_style" style="background-color: black; margin-left: 5px; color: white;">Beta</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Use Face ID or fingerprint</label>
                </div>
            </div>

            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>

        <!-- cell3 -->
        <div class="content_hleft_vcenter" 
        @click="icloudbackupCellClick"
        style="background-color: #f4f4f6; border-radius: 10px; height: 70px; text-align: left; margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <div class="content_hcenter_vcenter" style="background-color: #e7e6f6; width: 30px; height: 30px; border-radius: 15px;">
                    <img src="../../assets/asserts/sw_icon_Normal@2x.png" width="17px" />
                </div>
            </div>

            <div style="width: 75%;">
                <div class="content_hleft_vcenter">
                    <label class="global_primary_black_text_style">ICloud backup</label>
                    <label class="global_flag_gray_text_style" style="background-color: #dddbe9; margin-left: 5px">+100 points*</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Restore from iCloud backup</label>
                </div>
            </div>

            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>

        <!-- cell4 -->
        <div class="content_hleft_vcenter" 
        @click="viewOnlyWalletCellClick"
        style="background-color: #f4f4f6; border-radius: 10px; height: 70px; text-align: left; margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <div class="content_hcenter_vcenter" style="background-color: #e7e6f6; width: 30px; height: 30px; border-radius: 15px;">
                    <img src="../../assets/asserts/sw_icon_Normal@2x.png" width="17px" />
                </div>
            </div>

            <div style="width: 75%;">
                <div class="content_hleft_vcenter">
                    <label class="global_primary_black_text_style">View-only wallet</label>
                    <label class="global_flag_gray_text_style" style="background-color: #dddbe9; margin-left: 5px">+100 points*</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Observe or track assets of other wallets</label>
                </div>
            </div>

            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>

        <div class="content_hleft_vcenter" style="margin-top: 15px;">
            <img src="../../assets/asserts/circled-warning-f_Normal@2x.png" width="12px" />
            <label class="global_desciption_text_style" style="font-size: 10px;">You can create another wallet at anytime under 'Manage Wallet'.</label>
        </div>

        <div style="margin-top: 15px; text-align: left;">
            <img src="../../assets/asserts/asterisk_Normal@2x.png" width="12px" />
            <label class="global_desciption_text_style" style="font-size: 10px; color: goldenrod;">Only multi-coin wallets are eligible for points.</label>
        </div>
    </div>
    
</template>

<script>
export default {
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        secretPhraseCellClick() {
            this.$router.push({ name: 'selectNetworkView' })
        },
        swiftCellClick() {

        },
        icloudbackupCellClick() {

        },
        viewOnlyWalletCellClick() {

        },
    }
}
</script>