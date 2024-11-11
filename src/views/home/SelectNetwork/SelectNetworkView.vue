<template>
    <van-nav-bar title="Slect network" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px;">
        <van-search 
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="Search"
        @search="onSearch"
    />
    </div>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 15px;">
        <div 
        v-for="(item, index) in networkList" :key="item.title" style="height: 40px; text-align: left;"
        @click="networkCellClick(item, index)">
            <div class="content_hleft_vcenter">
                <div class="content_hleft_vcenter" style="width: 8%;">
                    <img :src="item.imgStr" width="20px" style="border-radius: 12px; border: #eaebee solid 1px;"/>
                </div>

                <div class="content_hleft_vcenter" style="width: 82%;">
                    <label class="global_primary_black_text_style">{{ item.title }}</label>
                    <label v-if="item.subTitle != null" class="global_flag_gray_text_style" style="margin-left: 5px;">{{ item.subTitle }}</label>
                </div>

                <div style="width: 10%; text-align: right;">
                    <img style="width: 5px; height: 10px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
                </div>
            </div>
            
            <div class="dividerLittle"
            v-if="item.isHasBottomLine"
            style="background-color: #eaebee; margin-top: 10px;"></div>
        </div>
    </div>


</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const networkList = ref([
            {title: 'Multi-coin wallet', subTitle: '+100 points', isHasBottomLine: true, imgStr: require('../../../assets/asserts/trust_icon_Normal@2x_1.png')},
            {title: 'Aeternity', imgStr: require('../../../assets/asserts/trust_icon_Normal@2x_1.png')},
            {title: 'Agoric', imgStr: require('../../../assets/asserts/trust_icon_Normal@2x_1.png')},
            {title: 'Aion', imgStr: require('../../../assets/asserts/trust_icon_Normal@2x_1.png')},
        ]);

        return {
            networkList
        }

    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://community.trustwallet.com/t/how-to-import-a-wallet/87' } })
        },
        networkCellClick(item, index) {
            console.log(item.title + ',' + index)
            this.$router.push({ name: 'restoreWalletView', query: { walletName: item.title } })
        }
    }
}
</script>