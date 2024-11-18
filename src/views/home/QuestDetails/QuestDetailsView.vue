<template>
   <van-nav-bar title="Trust handles" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-question-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px; text-align: left;">
        <div class="content_hleft_vcenter">
            <div style="width: 15%;">
                <img src="../../../assets/asserts/1inch_Normal.png" width="40px" />
            </div>

            <div style="width: 60%;">
                <div>
                    <label class="global_primary_black_text_style" style="font-size: 12px;">My Wallet</label>
                </div>

                <div>
                    <label class="global_big_primary_black_text_style">0 points</label>
                </div>

                <div style="margin-top: -5px;">
                    <label class="global_primary_blue_text_style" style="font-size: 10px;">100 points</label>
                    <label class="global_desciption_text_style" style="font-size: 10px;"> to claim</label>
                </div>
            </div>

            <div style="width: 25%; text-align: right">
                <van-button color="#0400f4" style="height: 25px; font-size: 12px;">Claim all</van-button>
            </div>
        </div>

        <!-- points tracker -->
         <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 5px; margin-top: 10px;height: 40px;">
            <div class="content_hcenter_vcenter" style="width: 15%;">
                <img style="padding: 5px; background-color: #dbdbf5; border-radius: 16px;" src="../../../assets/asserts/gift-1c_Normal_black@2x.png" width="12px" />
            </div>

            <div style="width: 70%;">
                <div>
                    <label class="global_primary_black_text_style" style="font-size: 12px;">Points tracker</label>
                </div>
                <div style="margin-top: -10px;">
                    <label class="global_desciption_text_style" style="font-size: 10px;">Manage your Trust Points</label>
                </div>
            </div>

            <div style="width: 15%; text-align: right; margin-right: 20px;">
                <img src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png" width="5px" height="10px" />
            </div>
         </div>

         <!-- Eran Trust Points -->
          <div style="margin-top: 20px;">
            <div>
                <label class="global_primary_black_text_style" style="font-size: 20px;">Earn Trust Points with Quest</label>
            </div>

            <div style="line-height: 15px;">
                <label class="global_desciption_text_style">Complete in-app tasks to earn Trust Points and unlock future rewards.</label>
            </div>
          </div>

        <!-- up to 210 Trust -->
        <div class="content_hleft_vcenter" style="margin-top: 10px; background-color: black; color: white; width: fit-content; padding: 5px; border-radius: 5px;">
            <img src="../../../assets/asserts/gift-1c_Normal_white@2x.png" width="13px" height="13px" />
            <label style="font-size: 10px; margin-left: 5px;">Up to 210 Trust Points daily</label>
        </div>  

        <!-- Warning If points not claimed -->
         <div class="content_hleft_vtop" style="background-color: #fcf9f0; border-radius: 5px; margin-top: 10px; padding: 10px;">
            <div class="content_hleft_vtop" >
                <img src="../../../assets/asserts/circled-info-f_Normal_gold@2x.png" width="13px" height="13px" />
            </div>
            <div class="content_hleft_vtop" style="margin-left: 5px; margin-right: 40px;">
                <label class="global_desciption_text_style" style="font-size: 10px; color: goldenrod;">If points are not claimed within 3 months, they'll be removed. Any claimed points must be used within 1 year before they expire.</label>
            </div>
         </div>

         <van-divider />

         <!-- Daily check-in  -->
          <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 10px; padding: 10px">
            <div style="width: 80%;">
                <div class="content_hleft_vcenter" style="border-bottom: 1px solid #eaebee; padding-bottom: 6px;">
                    <label class="global_primary_black_text_style" style="font-size: 12px;">Daily check-in </label>
                    <label class="global_flag_gray_text_style" style="margin-left: 5px;">+10</label>
                </div>
                <div style="line-height: 12px; margin-top: 7px;">
                    <label class="global_desciption_text_style" style="font-size: 10px;">Check in once per day to earn 10 points. The counter resets daily at 00:00 UTC.</label>
                </div>
            </div>

            <div style="width: 20%; text-align: center">
                <van-button color="#0400f4" style="height: 25px; font-size: 12px;">Start</van-button>
            </div>
          </div>

          <!-- Stake 0.025 ETH  -->
          <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 10px; padding: 10px; margin-top: 10px;">
            <div style="width: 80%;">
                <div class="content_hleft_vcenter" style="border-bottom: 1px solid #eaebee; padding-bottom: 6px;">
                    <label class="global_primary_black_text_style" style="font-size: 12px;">Stake 0.025 ETH </label>
                    <label class="global_flag_gray_text_style" style="margin-left: 5px;">+200</label>
                </div>
                <div style="line-height: 12px; margin-top: 7px;">
                    <label class="global_desciption_text_style" style="font-size: 10px;">Stake at least 0.025 ETH daily to earn 200 points!</label>
                </div>
                <div>
                    <label class="global_primary_blue_text_style" style="font-size: 10px;">More Info</label>
                </div>
            </div>

            <div style="width: 20%; text-align: center">
                <van-button color="#0400f4" style="height: 25px; font-size: 12px;">Start</van-button>
            </div>
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
    }
}
</script>