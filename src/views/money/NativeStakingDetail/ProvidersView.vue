<template>
    <van-nav-bar title="Providers" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px; text-align: left;">
        <div>
            <label class="global_primary_gray_text_style">Active</label>
        </div>

        <div class="content_hleft_vcenter" style="height: 50px; margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img src="../../../assets/asserts/trust_icon_Normal@2x_1.png" style="height: 24px; width: 24px;" />
            </div>
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style" style="margin-left: 5px;">Trust Nodes</label>
                </div>
                <div>
                    <label class="global_desciption_text_style" style="margin-left: 5px;">APR</label>
                    <label class="global_desciption_text_style" style="color: green"> 4.03%</label>
                </div>
            </div>

            <div class="content_hright_vcenter" style="width: 10%;">
                <img src="../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" style="height: 24px; width: 24px;" />
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        let dataDict = ref(JSON.parse(route.query.dataDict))
        
        return {
            dataDict,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
    }
}
</script>