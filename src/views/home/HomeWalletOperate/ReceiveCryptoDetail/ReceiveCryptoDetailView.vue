<template>
    <van-nav-bar title="Favorite" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
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
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        const itemData = ref(JSON.parse(route.query.itemData))

        return {
            itemData,
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