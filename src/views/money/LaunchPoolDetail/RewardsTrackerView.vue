<template>
    <van-nav-bar title="Rewards Tracker" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px;">
        <RewardsTrackerEmpty v-if="dataDict == null" />
    </div>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import RewardsTrackerEmpty from './RewardsTrackerEmpty.vue';
export default {
    setup() {
        const route = useRoute()
        let dataDict = ref(route.query.dataDict == null ? null : JSON.parse(route.query.dataDict))
        
        return {
            dataDict,
        }
    },
    components: {
        RewardsTrackerEmpty,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/how-to-stake-ethereum-eth-using-trust-wallet' } })
        },
        stakeNextCellClick() {
            this.$router.push({ name: 'stakeInputAmountView', query: { dataDict: JSON.stringify(this.dataDict) }})
        }
    }
}
</script>