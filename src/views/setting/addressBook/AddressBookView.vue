<template>
    <van-nav-bar title="Price Alerts" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/plus-f_Normal_blue@2x_1.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin: 300px 15px 15px 15px">
        <div>
            <img src="../../../assets/asserts/Empty Wallet _ lm_Normal@2x.png" width="80px" />
        </div>

        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style">Your contacts and their wallet address will appear here.</label>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 15px;">
            <label>Add wallet address</label>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            
        }
    },
    
}
</script>