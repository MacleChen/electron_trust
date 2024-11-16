<template>
    <van-nav-bar title="Select Asset" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
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
            <div style="margin-top: 8px;">
                <div class="content_hleft_vcenter" style="height: 50px;"
                v-for="item in cryptoList" :key="item.title"
                @click="assetCellClick(item.webUrl)">
                    <div style="width: 10%; text-align: left;">
                        <img :src="item.imgName" width="25px" />
                    </div>

                    <div style="width: 90%; text-align: left">
                        <div class="content_hleft_vcenter">
                            <label class="global_primary_black_text_style">{{ item.title }}</label>
                            <label class="global_flag_gray_text_style" style="margin-left: 5px;">{{ item.flag }}</label>
                        </div>
                        
                        <div>
                            <label class="global_desciption_text_style">{{ item.subTitle }}</label>
                        </div>
                    </div>
                </div>

            </div>

            <ManageCryptoEmpty v-if="cryptoList.length == 0" @valueChanged="importOrAndNewCryptoClick"/>
        </div>
    </div>

    <van-action-sheet v-model:show="isShowAllNetwork" title="Networks">
        <AllNetworksAlert @valueChanged="allNetworkAlertCellClickCallback" /> 
    </van-action-sheet>
</template>

<script>
import { ref, inject, watch } from 'vue';
import { showToast } from 'vant';
import AllNetworksAlert from '@/views/discover/widgets/Alert/AllNetworksAlert.vue';
import { useRequest } from 'vue-hooks-plus';
import ManageCryptoEmpty from '../ManageCrypto/ManageCryptoEmpty.vue';

export default {
    setup() {
        const value = ref('');
        const globarVars = inject("globalVars")
        const onSearch = (val) => showToast(val);

        const showNetworkTypeStr = ref('All Networks')
        const isShowAllNetwork = ref(false)

        
        const cryptoList = ref([]);
        var backupCryptoList = ref([])
        var { data } = useRequest(() => {
            return fetch(globarVars.globalOkLinkUrl + '/api/v5/explorer/token/token-list?chainShortName=eth&limit=50', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            if (newValue.code == "0") {
                for(var i = 0; i < newValue.data[0].tokenList.length; i++) {
                    const chainData = newValue.data[0].tokenList[i]
                    cryptoList.value.push({title: chainData.token, subTitle: chainData.token, 
                    flag: chainData.tokenFullName, webUrl: chainData.website,
                    imgName: chainData.logoUrl})
                }
                backupCryptoList.value = cryptoList.value
            }
        })

        return {
        value,
        onSearch,
        isShowAllNetwork,
        showNetworkTypeStr,
        cryptoList,
        backupCryptoList,
        globarVars,
        };
    },
    components: {
        AllNetworksAlert,
        ManageCryptoEmpty,
    },
    methods: {
        navBarLeftClick() {
            this.globarVars.globalBitcoinsList = []
            for(var i = 0; i < this.cryptoList.length; i++) {
                const dataModel = this.cryptoList[i]
                this.globarVars.globalBitcoinsList.push({title: dataModel.title + "USDT", subTitle: dataModel.flag, 
                imgName: dataModel.imgName, isSel: dataModel.isSelected},)
            }

            this.$router.back()
        },
        topCancelClick() {
            this.$emit("cancelCallback")
        },
        allNetworkClick() {
            this.isShowAllNetwork = true
        },
        allNetworkAlertCellClickCallback(item) {
            console.log(item.title)

            this.isShowAllNetwork = false
            this.showNetworkTypeStr = item.title
            

            if (item.title == 'All Networks') {
                this.cryptoList = this.backupCryptoList
            } else {
                this.cryptoList = this.backupCryptoList.filter((dataModel) => dataModel.flag.toLowerCase().includes(item.title.toLowerCase()))
            }
            
        },
        importOrAndNewCryptoClick() {
            this.$router.push({ name: 'importCryptoView' })
        },
        assetCellClick(webUrl) {
            if (webUrl != null && webUrl != '') {
                this.$router.push({ name: 'commonWebView', query: { requestURL: webUrl } })
            } else {
                showToast('Host is empty.')
            }
            
        }
    }
}
</script>