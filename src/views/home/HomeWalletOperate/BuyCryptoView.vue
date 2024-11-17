<template>
    <van-nav-bar title="Buy" @click-left="navBarLeftClick" :fixed="true" >
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

            <div style="margin-top: 10px;">
                <div style="text-align: left;">
                    <label class="global_primary_gray_text_style">Popular</label>
                </div>

                <div class="content_hcenter_vcenter"  style="margin-top: 5px;">
                    <div class="content_hleft_vcenter" 
                    style="background-color: #f4f4f6; border-radius: 10px; text-align: left; height: 60px; width: 50%;">
                        <div style="margin-left: 10px;">
                            <img src="../../../assets/asserts/60_Normal.png" width="24px" style="border: #d9d9d9 solid 1px; border-radius: 13px;"/>
                        </div>
                        <div style="margin-left: 10px;">
                            <div>
                                <label class="global_primary_black_text_style">ETH</label>
                            </div>
                            <div style="margin-top: -5px;">
                                <label class="global_desciption_text_style">Ethereum</label>
                            </div>
                        </div>
                    </div>

                    <div class="content_hleft_vcenter" 
                    style="background-color: #f4f4f6; border-radius: 10px; text-align: left; height: 60px; width: 50%; margin-left: 10px;">
                        <div style="margin-left: 10px;">
                            <img src="../../../assets/asserts/0_Normal.png" width="24px" />
                        </div>
                        <div style="margin-left: 10px;">
                            <div>
                                <label class="global_primary_black_text_style">BTC</label>
                            </div>
                            <div style="margin-top: -5px;">
                                <label class="global_desciption_text_style">Bitcoin</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 8px;">
                <div class="content_hleft_vcenter" style="height: 50px;"
                v-for="item in cryptoList" :key="item.title">
                    <div style="width: 10%; text-align: left;">
                        <img :src="require('../../../assets/asserts/' + item.imgName + '.png')" width="25px" />
                    </div>

                    <div style="width: 75%; text-align: left">
                        <div class="content_hleft_vcenter">
                            <label class="global_primary_black_text_style">{{ item.title }}</label>
                            <label class="global_flag_gray_text_style" style="margin-left: 5px;">{{ item.flag }}</label>
                        </div>
                        
                        <div>
                            <label style="font-size: 12px; color: #868d9a;">${{ item.allMoney }}</label>
                            <label style="font-size: 10px; margin-left: 5px;" 
                            :style="{color: item.percent > 0 ? '#5eba89':'red' }">{{ item.percent }}%</label>
                                    </div>
                    </div>

                    <div style="width: 15%; text-align: right;">
                        <div>
                            <label class="global_primary_black_text_style">{{ item.rightTopMoney }}</label>
                        </div>
                        <div>
                            <label class="global_desciption_text_style">${{ item.rightBottomMoney }}</label>
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
        for (let i  = 0; i < globarVars.globalBitcoinsList.length; i++) {
            const bitcoinModel = globarVars.globalBitcoinsList[i]
            const myTitle = bitcoinModel.title.replace('USDT', '')
            cryptoList.value.push({title: myTitle, subTitle: myTitle, 
                flag: bitcoinModel.subTitle, isSelected: bitcoinModel.isSel, 
                allMoney: 684830.23, percent: 0.45, rightTopMoney: 0, rightBottomMoney:0.00,
                imgName: bitcoinModel.imgName},)
        }

        var { data } = useRequest(() => {
            return fetch(globarVars.globalOkLinkUrl + '/api/v5/explorer/tokenprice/chain-list', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            if (newValue.code == "0") {
                for(var i = 0; i < newValue.data.length; i++) {
                    const chainData = newValue.data[i]
                    cryptoList.value.push({title: chainData.chainShortName, subTitle: chainData.chainShortName, 
                    flag: chainData.chainFullName, isSelected: false, allMoney: 684830.23, percent: 0.45, rightTopMoney: 0, rightBottomMoney:0.00,
                    imgName: '0_Normal'})
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
        }
    }
}
</script>