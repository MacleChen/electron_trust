<template>
    <van-nav-bar title="Launchpool" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="@/assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px;">
        <LaunchPoolView />
    </div>
    
</template>

<script>
import LaunchPoolView from '@/views/money/LaunchPoolView.vue';
export default {
    components: {
        LaunchPoolView,
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