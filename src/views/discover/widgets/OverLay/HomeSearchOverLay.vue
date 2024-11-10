<template>
    <div style="background-color: white; width: 100%; height: 100%">
        <div class="content_hleft_vcenter" style="padding-top: 20px;">
            <van-search style="width: 85%;"
            v-model="value"
            shape="round"
            background="#fff"
            placeholder="Search"
            @search="onSearch"
            />
            <div style="width: 15%; text-align: left;" @click="topCancelClick">
                <label class="global_primary_blue_text_style">Cancel</label>
            </div>
        </div>

        <div style="margin-left: 15px; margin-right: 15px;">
            <div class="content_hcenter_vcenter" 
            @click="allNetworkClick"
            style="width: 100px; height: 24px; background-color: #f4f4f6; border-radius: 12px; padding-left: 6px; padding-right: 6px;">
                <label class="global_primary_gray_text_style">{{ showNetworkTypeStr }}</label>
                <img src="../../../../assets/asserts/icon-caret-down_Normal@2x.png" width="8px" />
            </div>

            <div style="text-align: left; margin-top: 30px;">
                <label class="global_desciption_text_style">Crypto</label>
            </div>

            <div style="margin-top: 8px;">
                <MainHomeCryptoList />
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
import AllNetworksAlert from '../Alert/AllNetworksAlert.vue';
import MainHomeCryptoList from '@/views/home/MainHomeSubview/MainHomeCryptoList.vue';

export default {
    setup() {
        const value = ref('');
        const onSearch = (val) => showToast(val);
        const onCancel = () => showToast('取消');

        const showNetworkTypeStr = ref('All Networks')
        const isShowAllNetwork = ref(false)
        return {
        value,
        onSearch,
        onCancel,
        isShowAllNetwork,
        showNetworkTypeStr,
        };
    },
    components: {
        MainHomeCryptoList,
        AllNetworksAlert,
    },
    methods: {
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