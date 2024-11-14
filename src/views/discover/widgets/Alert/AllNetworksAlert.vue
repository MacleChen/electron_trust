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

export default {
    setup() {
        const networkList = ref([{title: "All Networks", imgStr: require('../../../../assets/asserts/' + '0_Normal' + '.png')}]);
        const globarVars = inject("globalVars")

        const searchValue = ref('');
        var backupNetworkList = []

        var { data } = useRequest(() => {
            return fetch(globarVars.globalOkLinkUrl + '/api/v5/explorer/blockchain/summary', {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            if (newValue.code == "0") {
                for(var i = 0; i < newValue.data.length; i++) {
                    const chainData = newValue.data[i]
                    networkList.value.push({title: chainData.chainFullName,
                    imgStr: require('../../../../assets/asserts/' + '0_Normal' + '.png')})
                }
                backupNetworkList = networkList.value
            }
            
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