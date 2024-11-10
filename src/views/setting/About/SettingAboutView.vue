<template>
    <van-nav-bar title="About" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px; margin-left: 15px; margin-right: 15px;">
        <!-- cell1 Security Scanner -->
         <div class="content_hleft_vcenter" style="height: 60px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Make a suggestion</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Let us know if you have an idea to improve the app</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
         </div>

         <!-- cell2 Privacy Policy -->
         <div class="content_hleft_vcenter" style="height: 40px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Privacy Policy</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
         </div>

         <!-- cell3 Terms of Service -->
         <div class="content_hleft_vcenter" style="height: 40px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Terms of Service</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
         </div>

         <!-- cell4 Version  -->
         <div class="content_hleft_vcenter" style="height: 40px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Version 11.16 (1144)</label>
                </div>
            </div>
         </div>
    </div>

</template>

<script>

export default {
    setup() {

    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
    }
}
</script>