<template>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px; text-align: left; margin-bottom: 30px;">
        <div class="content_hleft_vcenter" style="background-color: #f4f4f6; border-radius: 10px; height: 50px; margin-top: 15px;"
        v-for="item in payMethodList" :key="item.title" @click="cellClick(item)">
            <div class="content_hcenter_vcenter" style="width: 10%;">
                <img :src="require('@/assets/asserts/' + item.imgStr)" width="20px" />
            </div>

            <div style="width: 80%;">
                <label class="global_primary_black_text_style">{{ item.title }}</label>
            </div>

            <div style="width: 10%;">
                <img v-if="item.title == selectPayName" src="../../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" width="20px" />
            </div>
        </div>

    </div>

</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const selectPayName = ref('Credit card')

        const payMethodList = ref([
            {title: 'Apple Pay', imgStr: 'apple-f_Normal@2x.png'},
            {title: 'Credit card', imgStr: 'credit_cards_Normal@2x.png'},
            {title: 'Bank transfer', imgStr: 'bank-f_Normal@2x_1.png'},
            {title: 'P2P', imgStr: 'opBNB_Normal.png'},
        ])

        return {
            selectPayName,
            payMethodList,
        }
    },
    methods: {
        cellClick(item) {
            this.selectPayName = item.title
            this.$emit("valueChanged", item)
        }
    }
}
</script>