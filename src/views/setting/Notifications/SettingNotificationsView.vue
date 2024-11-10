<template>
    <van-nav-bar title="Trust handles" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px; margin-left: 15px; margin-right: 15px;">

         <div class="content_hleft_vcenter" style="height: 40px; text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Allow push notifications</label>
                </div>
            </div>
                
            <div style="width: 20%; text-align: right">
                <van-switch v-model="isNotificationChecked" />
            </div>
         </div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isNotificationChecked = ref(false)

        return {
            isNotificationChecked,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }
    }
}
</script>