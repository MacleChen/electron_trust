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

    <div class="content_hleft_vcenter" style="height: 50px; margin-left: 15px; margin-right: 15px;"
        v-for="(item, index) in networkList" :key="index"
        @click="cellContentClick(item, index)">
        <div style="width: 10%; text-align: left">
            <img :src="item.imgStr" width="25px" />
        </div>

        <div style="width: 80%; text-align: left;">
            <div style="height: 50%; margin-top: -5px;">
                <label class="global_primary_black_text_style">{{ item.title }}</label>
            </div>
            <div style="height: 50%; margin-top: -5px; width: 40%;">
                <van-text-ellipsis class="global_desciption_text_style" :content="item.subTitle" position="middle" />
            </div>
        </div>

        <div style="width: 10%;">
            <div class="content_hcenter_vcenter" 
            style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px; margin-right: 10px;">
                <img src="../../../../assets/asserts/icon-copy_Normal@2x.png" width="15px" height="15px" />
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import { ref, inject, watch } from 'vue';
import { useRequest } from 'vue-hooks-plus';

export default {
    setup() {
        const networkList = ref([]);
        const globarVars = inject("globalVars")

        const searchValue = ref('');
        var backupNetworkList = []

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
                    networkList.value.push({title: chainData.tokenFullName, subTitle: chainData.tokenContractAddress,
                    imgStr: chainData.logoUrl})
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