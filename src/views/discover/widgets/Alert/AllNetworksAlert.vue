<template>
<div style="min-height: 100vh;">
    <van-search
            v-model="searchValue"
            shape="round"
            background="#fff"
            placeholder="Search"
            @search="onSearch"
            @clear="onSearchCancel"
            clear-trigger="always"
            />

    <div class="content_hleft_vcenter" style="height: 40px; margin-left: 15px; margin-right: 15px;"
        v-for="(item, index) in networkList" :key="index"
        @click="cellContentClick(item, index)">
        <div style="width: 10%; text-align: left">
            <img :src="item.imgStr" width="25px" />
        </div>

        <div style="width: 80%; text-align: left;">
            <label class="global_primary_black_text_style">{{ item.title }}</label>
        </div>

        <div style="width: 10%;">
            <img v-if="item.isSelected" src="../../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" width="20px" />
        </div>
    </div>
</div>
    
</template>

<script>
import { ref, inject, watch } from 'vue';
import { useRequest } from 'vue-hooks-plus';
// import { getChainIconImagePath } from '@/services/wallet';

export default {
    setup() {
        const networkList = ref([{title: "All Networks", imgStr: require('@/assets/asserts/all_network_icon.png')}]);
        const globarVars = inject("globalVars")

        const searchValue = ref('');
        var backupNetworkList = []

        var { data } = useRequest(() => {
            return fetch('https://api.coingecko.com/api/v3/asset_platforms', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            for(var i = 0; i < newValue.length; i++) {
                const chainData = newValue[i]
                
                // const logoPath = getChainIconImagePath(chainData.chainFullName)
                if (chainData.image.small != null) {
                    networkList.value.push({title: chainData.name,
                        imgStr: chainData.image.small}) 
                }
                
            }
            backupNetworkList = networkList.value
            
        })

        const onSearch = (val) => {
            if (val == '') {
                networkList.value = backupNetworkList
            } else {
                networkList.value = backupNetworkList.filter((dataModel) => dataModel.title.toLowerCase().includes(val.toLowerCase()))
            }
        }

        const onSearchCancel = () => {
            networkList.value = backupNetworkList
        }

        return {
            networkList,
            onSearch,
            onSearchCancel,
            searchValue,
        }

    },
    methods: {
        cellContentClick(item, index) {
            for(let i  = 0; i < this.networkList.length; i++) {
                this.networkList[i].isSelected = index == i
            }
            this.$emit("valueChanged", item)
        }
    }
}
</script>