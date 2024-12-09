<template>
    <van-nav-bar :title="'Launchpool:' + poolData.symbol" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        let poolData = ref(JSON.parse(route.query.item))

        return {
            poolData,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/trust-wallet-launchpool' } })
        }
    }
}
</script>