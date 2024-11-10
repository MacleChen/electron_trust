<template>
    <van-nav-bar title="Trust handles" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/info_Normal@3x.png" style="height: 35px; width: 35px;" />
        </template>
    </van-nav-bar>

    <div style="margin: 300px 15px 15px 15px">
        <div>
            <img src="../../../assets/asserts/Empty Wallet _ lm_Normal@2x.png" width="120px" />
        </div>

        <div style="margin-top: 15px;">
            <label class="global_big_primary_black_text_style">No handle created</label>
        </div>

        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style">Your handles will appear here.</label>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 15px;">
            <label>Register handle</label>
        </div>
    </div>

    <van-action-sheet v-model:show="isShowIntro" title=" ">
        <WhatsTheTrustHandleAlert /> 
    </van-action-sheet>
</template>

<script>
import { ref } from 'vue';
import WhatsTheTrustHandleAlert from '@/views/discover/widgets/WhatsTheTrustHandleAlert.vue';
export default {
    setup() {
        const isShowIntro = ref(false)

        return {
            isShowIntro,
        }
    },
    components: {
        WhatsTheTrustHandleAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.isShowIntro = true
        }
    },
    
}
</script>