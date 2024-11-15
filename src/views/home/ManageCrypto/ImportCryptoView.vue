<template>
    <van-nav-bar title="Import crypto" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/plus-f_Normal@2x_2.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>
</template>

<script>
export default {
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
        
        }
    }
}
</script>