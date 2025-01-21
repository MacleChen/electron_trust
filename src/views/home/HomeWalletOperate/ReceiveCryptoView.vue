<template>
    <van-nav-bar title="Receive" @click-left="navBarLeftClick" :fixed="true" >
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
            <div 
            @click="allNetworkClick"
            style="height: 24px; background-color: #f4f4f6; border-radius: 12px; padding-left: 6px; padding-right: 6px; width: fit-content;">
                <label class="global_primary_gray_text_style">{{ showNetworkTypeStr }}</label>
                <img src="../../../assets/asserts/icon-caret-down_Normal@2x.png" width="8px" />
            </div>

            <div style="margin-top: 8px;">
                <div class="content_hleft_vcenter" style="height: 50px;"
                v-for="item in cryptoList" :key="item.title"
                @click="cryptoCellClick(item)">
                    <div style="width: 10%; text-align: left;">
                        <img :src="item.imgName" width="25px" />
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

                    <div style="width: 15%; text-align: right;">
                        <div>
                            <label class="global_primary_black_text_style">0</label>
                        </div>
                        <div>
                            <label class="global_desciption_text_style">$0.00</label>
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
            return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            for(var i = 0; i < newValue.length; i++) {
                const chainData = newValue[i]
                cryptoList.value.push({id: chainData.id, title: chainData.symbol.toUpperCase(), subTitle: chainData.name, 
                flag: chainData.name, isSelected: false,
                imgName: chainData.image})
            }
            backupCryptoList.value = cryptoList.value
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
        cryptoCellClick(item) {
            this.$router.push({ name: 'receiveCryptoDetailView', query: {itemData: JSON.stringify(item) } })
        }
    }
}
</script>