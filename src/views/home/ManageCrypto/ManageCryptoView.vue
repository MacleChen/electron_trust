<template>

    <van-nav-bar title="Price Alerts" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/plus-f_Normal@2x_2.png" style="height: 24px; width: 24px;" />
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
    <div style="background-color: white; width: 100%; height: 100%">
        <div style="margin-left: 15px; margin-right: 15px;">
            <div class="content_hcenter_vcenter" 
            @click="allNetworkClick"
            style="width: 100px; height: 24px; background-color: #f4f4f6; border-radius: 12px; padding-left: 6px; padding-right: 6px;">
                <label class="global_primary_gray_text_style">{{ showNetworkTypeStr }}</label>
                <img src="../../../assets/asserts/icon-caret-down_Normal@2x.png" width="8px" />
            </div>

            <div style="margin-top: 8px;">
                <div class="content_hleft_vcenter" style="height: 50px;"
                v-for="item in cryptoList" :key="item.title">
                    <div style="width: 10%; text-align: left;">
                        <img :src="item.imgStr" width="25px" />
                    </div>

                    <div style="width: 75%; text-align: left">
                        <div class="content_hleft_vcenter">
                            <label class="global_primary_black_text_style">{{ item.title }}</label>
                            <label class="global_flag_gray_text_style" style="margin-left: 5px;">{{ item.flag }}</label>
                        </div>
                        
                        <div>
                            <label class="global_desciption_text_style">{{ item.subTitle }}</label>
                        </div>
                    </div>

                    <div style="width: 15%;">
                        <van-switch v-model="item.isSelected" />
                    </div>
                </div>

            </div>
        </div>
    </div>

    <van-action-sheet v-model:show="isShowAllNetwork" title="Networks">
        <AllNetworksAlert @valueChanged="allNetworkAlertCellClickCallback" /> 
    </van-action-sheet>

</template>

<script>
import { ref } from 'vue';
import { showToast } from 'vant';
import AllNetworksAlert from '@/views/discover/widgets/Alert/AllNetworksAlert.vue';

export default {
    setup() {
        const value = ref('');
        const onSearch = (val) => showToast(val);

        const showNetworkTypeStr = ref('All Networks')
        const isShowAllNetwork = ref(false)

        const cryptoList = ref([
            {title: 'BTC', subTitle: 'BTC',flag: 'Bitcoin', isSelected: true, imgStr: require('../../../assets/asserts/0_Normal.png')},
            {title: 'ETH', subTitle: 'ETH',flag: 'Ethereum', isSelected: true, imgStr: require('../../../assets/asserts/0_Normal.png')},
            {title: 'BNB', subTitle: 'BNB',flag: 'BNB Smart Chain', isSelected: true, imgStr: require('../../../assets/asserts/0_Normal.png')},
            {title: 'TWT', subTitle: 'TWT',flag: 'BNB Smart Chain', isSelected: true, imgStr: require('../../../assets/asserts/0_Normal.png')},
            {title: 'POL', subTitle: 'POL',flag: 'Polygon', isSelected: true, imgStr: require('../../../assets/asserts/0_Normal.png')},
            {title: 'AE', subTitle: 'AE', flag: 'Aeternity', isSelected: false, imgStr: require('../../../assets/asserts/0_Normal.png')},
        ]);
        return {
        value,
        onSearch,
        isShowAllNetwork,
        showNetworkTypeStr,
        cryptoList,
        };
    },
    components: {
        AllNetworksAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        topCancelClick() {
            this.$emit("cancelCallback")
        },
        allNetworkClick() {
            this.isShowAllNetwork = true
        },
        allNetworkAlertCellClickCallback(item) {
            showToast(item.title)
            this.isShowAllNetwork = false
            this.showNetworkTypeStr = item.title
            console.log(item.title)
        }
    }
}
</script>