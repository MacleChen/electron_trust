<template>
    <van-nav-bar title="Swap settings" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="margin-left: 15px; margin-right: 15px">
        <div class="swap_setting_cell_containter">
            <div class="swap_setting_cell_containter" style="width: 50%;">
                <img @dragstart.prevent src="../../assets/asserts/payment-f_Normal@2x.png" width="30px" height="30px" />
                <div style="display: flex; justify-content: center; align-items: center;">
                    <label style="font-weight: bold; text-align: left; margin-left: 10px;"> Mev protection</label> 
                    <img style="width: 25px; height: 25px;" src="../../assets/asserts/info_Normal@3x.png"/>
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; width: 50%;">
                <van-switch v-model="checked"  />
            </div>
        </div>

        <div class="swap_setting_cell_containter">
            <div class="swap_setting_cell_containter" style="width: 50%;">
                <img @dragstart.prevent src="../../assets/asserts/payment-f_Normal@2x.png" width="30px" height="30px" />
                <div style="display: flex; justify-content: center; align-items: center;">
                    <label style="font-weight: bold; text-align: left; margin-left: 10px;"> Mev protection</label> 
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; width: 50%;">
                <van-switch v-model="checked"  />
            </div>
        </div>

        <div class="swap_setting_cell_containter">
            <div class="swap_setting_cell_containter" style="width: 50%;">
                <img @dragstart.prevent src="../../assets/asserts/payment-f_Normal@2x.png" width="30px" height="30px" />
                <div style="display: block;">
                    <div style="display: flex; justify-content: left;">
                        <label style="font-weight: bold; margin-left: 10px;">Mev protection</label> 
                    </div>
                    <div style="line-height: 10px; ">
                        <label style="margin-left: 10px; font-size: 8px;"> Gives better quote, but takes longer to process the swap.</label> 
                    </div>
                    
                    
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; width: 50%;">
                <van-switch v-model="checked"  />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        navBarLeftClick() {
            this.$router.back();
    }
    }
 }
</script>

<style>
.swap_setting_cell_containter {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50px;
}

</style>