<template>
    <van-nav-bar title="Create new wallet" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div>{{ passcode }}</div>
    
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 15px;">
        <div class="new_wallet_content_secret">
            <div class="cell_tontent_top_container">
                <van-row style="height: 100%; align-items: center;">
                    <van-col span="20">
                        <van-row justify="left">
                            <van-col span="4">
                                图片
                            </van-col>
                            <van-col span="20" >
                                title
                            </van-col>
                        </van-row>

                    </van-col>
                    <van-col span="4">
                        按钮
                    </van-col>
                </van-row>
            </div>

            <div class="cell_tontent_bottom_container">

            </div>
        </div>

        <div class="new_wallet_content_swift">
            
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const passcode = route.query.passcode

        const activeNames = ref(['1']);
        return {
            passcode,
            activeNames,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }
    }
}
</script>

<style>
.new_wallet_content_secret {
    background-color: rgb(50, 252, 141);
    height: 60px;
}

.new_wallet_content_swift {
    background-color: yellow;
}
</style>