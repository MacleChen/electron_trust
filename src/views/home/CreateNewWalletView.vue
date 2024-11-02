<template>
    <van-nav-bar title="Create new wallet" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div>{{ passcode }}</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const passcode = route.query.passcode

        return {
            passcode,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }
    }
}
</script>