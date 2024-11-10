<template>
    <van-nav-bar title="WalletConnect" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/plus-f_Normal@2x_1.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin: 300px 15px 15px 15px">
        <div>
            <img src="../../../assets/asserts/Networks _ lm_Normal@2x.png" width="100px" />
        </div>

        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style">Connect your wallet to ineract with dApps and make transactions.</label>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 15px;">
            <label>Add new connection</label>
        </div>

        <div style="margin-top: 15px;">
            <label class="global_primary_blue_text_style">What is WalletConnect?</label>
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