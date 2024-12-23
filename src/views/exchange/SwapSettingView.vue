<template>
    <van-nav-bar title="Swap settings" @click-left="navBarLeftClick" :fixed="true" :border="false" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px">
        <div class="swap_setting_cell_containter" v-for="(item, index) in dataSource" :key="item.title" >
            <div class="swap_setting_cell_containter" style="width: 85%;">
                <div class="content_hcenter_vcenter" style="width: 26px; height: 26px; background-color: #f4f4f6; border-radius: 13px" >
                    <img @dragstart.prevent :src="item.imgStr" width="13px" height="13px" />
                </div>
                <div style="margin-left: 10px; text-align: left; width: 250px; line-height: 14px;">
                    <div class="content_hleft_vcenter">
                        <label class="global_primary_black_text_style" >{{ item.title }}</label> 
                        <img v-if="index == 0" style="width: 25px; height: 25px;" src="../../assets/asserts/info_Normal@3x.png"/>
                    </div>
                    <div >
                        <label class="global_desciption_text_style">{{ item.subTitle }}</label> 
                    </div>
                </div>

            </div>
            <div style="display: flex; justify-content: flex-end; width: 15%;">
                <van-switch v-model="item.iselected" size="20px" active-color="#0400f4" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const dataSource = ref([
            {title: "MEV protection", imgStr: require('../../assets/asserts/bab-token-f_Normal@2x.png'),subTitle: "", iselected: true},
            {title: "Unlimited allowance", imgStr: require('../../assets/asserts/payment-f_Normal@2x.png'),subTitle: "", iselected: true},
            {title: "MEV protection", imgStr: require('../../assets/asserts/recurring-buy-f_Normal@2x.png'),subTitle: "Gives better quote, but takes longer to process the swap.", iselected: true},
        ])

        return {
            dataSource,
        }
    },
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