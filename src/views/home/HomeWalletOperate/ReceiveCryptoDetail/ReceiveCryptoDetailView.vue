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

        <div class="content_hcenter_vcenter" style="margin-top: 20px;">
            <div style="margin-right: 40px;">
                <div class="content_hcenter_vcenter" style="width: 40px; height: 40px; background-color: #f4f4f6; border-radius: 20px;">
                    <img src="../../../../assets/asserts/icon-copy_Normal_dark@2x.png" style="height: 20px; width: 20px;" />
                </div>
                <div class="content_hcenter_vcenter" style="margin-top: 5px;">
                    <label class="global_primary_black_small_text_style">Copy</label>
                </div>
            </div>

            <div>
                <div class="content_hcenter_vcenter">
                    <div class="content_hcenter_vcenter" style="width: 40px; height: 40px; background-color: #f4f4f6; border-radius: 20px;">
                        <img src="../../../../assets/asserts/number-f_Normal_black@2x.png" style="height: 20px; width: 20px;" />
                    </div>
                </div>
                <div class="content_hcenter_vcenter" style="margin-top: 5px;">
                    <label class="global_primary_black_small_text_style">Set Amount</label>
                </div>
            </div>

            <div style="margin-left: 40px;">
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
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import GeneratorQRCode from './GeneratorQRCode.vue';
import { getUserData } from '@/utils/utils';

export default {
    setup() {
        const route = useRoute()
        const itemData = ref(JSON.parse(route.query.itemData))
        const showUrlStr = "https://www.baidu.com"

        const userData = getUserData()
        const address = ref(userData.account.address)

        return {
            itemData,
            showUrlStr,
            address,
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

        }
    }
}
</script>