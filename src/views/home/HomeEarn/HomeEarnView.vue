<template>
    <van-nav-bar title="Buy" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px;"></div>
    <div class="content_hleft_vcenter" style="height: 45px; margin-left: 15px; margin-right: 15px;"
        v-for="(item, index) in networkList" :key="index"
        @click="cellContentClick(item, index)">
        <div style="width: 10%; text-align: left">
            <img :src="item.imgStr" width="25px" />
        </div>

        <div style="width: 60%; text-align: left;">
            <div style="height: 50%; margin-top: -5px;">
                <label class="global_primary_black_text_style">{{ item.title }}</label>
            </div>
        </div>

        <div style="width: 30%;">
            <div class="content_hright_vcenter">
                <label class="global_primary_black_text_style" :style="{color: item.percent > 0 ? 'green':'red'}">ARP {{ item.percent > 0 ? '+' + item.percent  : '-' + item.percent }}%</label>
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
                    percent: 4.65,
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
        navBarLeftClick() {
            this.$router.back()
        },
        cellContentClick(item, index) {
            for(let i  = 0; i < this.networkList.length; i++) {
                this.networkList[i].isSelected = index == i
            }
            this.$emit("valueChanged", item)
        }
    }
}
</script>