<template>
    <van-nav-bar title="Latest" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px; text-align: center;">
        <LatestListContent :isLimitShow="false" @valueChanged="latestCellValueChange"/>
    </div>
</template>

<script>
import LatestListContent from './LatestListContent.vue';
export default {
    components: {
        LatestListContent,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }, 
        latestCellValueChange(item) {
            this.$router.push({ name: 'commonWebView', query: { requestURL: item.link } })
        }
    }
}
</script>