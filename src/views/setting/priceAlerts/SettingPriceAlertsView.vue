<template>
    <van-nav-bar title="Price Alerts" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px;margin-left: 15px; margin-right: 15px;">
        <div class="content_hleft_vcenter" style="text-align: left;">
            <div style="width: 80%;">
                <div>
                    <label class="global_primary_black_text_style">Price Alerts</label>
                </div>
                <div>
                    <label class="global_desciption_text_style">Get notified of price changes to your favourite crypto.</label>
                </div>
            </div>

            <div style="width: 20%; text-align: right;">
                <van-switch v-model="checked" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
  methods: {
    navBarLeftClick() {
        this.$router.back()
    }
  }
};
</script>