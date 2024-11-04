<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-bottom: 100px">
        <div class="wallet_alert_top_img">
            <img src="../../../assets/asserts/tw-safe_Normal@2x.png" width="143" />
        </div>

        <h3>Never Share Your Secret Phrase</h3>

        <div class="content_hleft_vtop">
            <div class="content_hleft_vtop" style="width: 8%;">
                <label class="content_hcenter_vcenter" style="background-color: #f4f4f6; height: 20px; width: 20px; border-radius: 10px; font-size: 12px; font-weight: bold; color: #21262f;">
                    1</label>
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px;">Your 12-word secret phrase is the master key to your wallet. Anyone that has your secret Phrase
                can access and take your crypto.
            </label>
            </div>
        </div>

        <div class="content_hleft_vtop" style="margin-top: 10px;">
            <div class="content_hleft_vtop" style="width: 8%;">
                <label class="content_hcenter_vcenter" style="background-color: #f4f4f6; height: 20px; width: 20px; border-radius: 10px; font-size: 12px; font-weight: bold; color: #21262f;">
                    2</label>
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px;">
                    Trust Wallet does not keep a copy of your secret phrase.
            </label>
            </div>
        </div>

        <div class="content_hleft_vtop" style="margin-top: 10px;">
            <div class="content_hleft_vtop" style="width: 8%;">
                <label class="content_hcenter_vcenter" style="background-color: #f4f4f6; height: 20px; width: 20px; border-radius: 10px; font-size: 12px; font-weight: bold; color: #21262f;">
                    3</label>
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px;">
                    Saving this digitally in plain text is NOT recommended. Examples include screenshots, text files,
                    or emailing yourself
            </label>
            </div>
        </div>

        <div class="content_hleft_vtop" style="margin-top: 10px;">
            <div class="content_hleft_vtop" style="width: 8%;">
                <label class="content_hcenter_vcenter" style="background-color: #f4f4f6; height: 20px; width: 20px; border-radius: 10px; font-size: 12px; font-weight: bold; color: #21262f;">
                    4</label>
            </div>
            <div style="width: 92%; text-align: left;">
                <label style="color: #21262f; font-size: 12px;">
                    Write down your secret phrase, and store it in a secure offline location!
            </label>
            </div>
        </div>
        
        <div class="content_hcenter_vcenter" @click="backupiCloudClick"
            style="background-color: blue; width: 100%; height: 50px; border-radius: 25px; color: white; font-size: 14px; font-weight: bold; margin-top: 45px;">
                Continue
            </div>
        
    </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>
.wallet_alert_top_img {
    margin-bottom: 20px;
}
</style>