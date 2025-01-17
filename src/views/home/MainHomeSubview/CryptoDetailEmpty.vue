<template>
    <div style="margin-top: 50px;">
        <div>
            <img src="../../../assets/asserts/illustration-not-found-data_Normal@2x.png" width="90px" />
        </div>
        <div>
            <label class="global_desciption_text_style">Transactions will appear here.</label>
        </div>
        <div>
            <label class="global_desciption_text_style">Can't find your transaction?</label>
            <label class="global_desciption_text_style" style="color: #0400f4;" @click="checkExplorerBtnClick"> Check explorer</label>
        </div>

        <div style="margin-top: 15px;">
            <van-button color="#0400f4" style="width: 100px; height: 35px; font-size: 13px; border-radius: 10px;"
                @click="buyCryptoBtnClick"
            >Buy {{ myCryptoTitle }}</van-button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        cryptoTitle: {type: String}
    },
    setup(props) {
        const myCryptoTitle = ref(props.cryptoTitle)

        return {
            myCryptoTitle,
        }
    },
    methods: {
        buyCryptoBtnClick() {
            this.$emit("valueChanged")
        },
        checkExplorerBtnClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://etherscan.io/address/0xf77430Eae143799432f848451752213477b0B72B' } })
        }
    }
}
</script>

