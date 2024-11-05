<template>
    <div class="content_hcenter_vcenter message_bg_content" @click="messagesTipClick">
        <div class="content_hcenter_vtop" style="width: 10%; height: 50%;">
            <img  src="../../../assets/asserts/circled-warning-f_Normal@2x.png" width="15px" style="transform: translateY(-2000px); filter: drop-shadow(goldenrod 0 2000px);"/>
        </div>

        <div class="content_hcenter_vcenter" style="width: 80%; text-align: left; color: goldenrod; font-size: 12px;">
            <label>Never share your secret phrase with anyone, and store it securely!</label>
        </div>

        <div class="content_hcenter_vtop" style="width: 10%; height: 50%;">
            <img src="../../../assets/asserts/chevron-right-f-24_Normal@2x.png" width="15px"/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        messagesTipClick() {
            this.$emit('valueChanged')
        }
    }
}
</script>

<style>
.message_bg_content {
    background-color: hsla(43, 74%, 49%, 0.134);
    width: 100%;
    height: 60px;
    border-radius: 10px;
}
</style>