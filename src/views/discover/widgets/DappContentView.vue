<template>
    <van-tabs v-model:active="active" @click-tab="onClickTab">
  <van-tab v-for="item in tabsList" :title="item.title" :key="item.title">
    <ul v-for="mydata in dataSourceList" :key="mydata.title">
        <div class="mydata_cell_containter" @click="cellContentClick(mydata)">
            <div style="width: 35px; height: 35px;">
                <img @dragstart.prevent :src="mydata.imgStr" width="100%" style="border-radius: 15px; object-fit: cover;"/>
            </div> 
            <div style="flex-grow: 1; margin-left: 10px;">
                <div style="display: flex;">
                    <label style="font-weight: bold; font-size: 14px;">{{ mydata.title }}</label> 
                </div>
                <div style="display: flex; width: 320px;">
                    <label class="ended_cell_bottom_cell_ellipsis" style="font-size: 12px;">{{ mydata.subtitle }}</label>
                </div>
            </div>
        </div>
    </ul>
  </van-tab>
</van-tabs>

<GlobalLoading  v-if="isShowLoading"/>
</template>

<script>
import { ref, watch } from 'vue';
import { useRequest } from 'vue-hooks-plus';
import GlobalLoading from './GlobalLoading.vue';

export default {
    props: {
        isLimitShow: {type: Boolean}
    },
  setup(props) {
    const active = ref(0);

    const tabsList = ref([
        {title: 'Feature', value: "solana"},
        {title: 'DEX', value: "starknet"},
        {title: 'Lending', value: "telos"},
        {title: 'Yield', value: "theta"},
        {title: 'BSC', value: "algorand"},
        {title: 'Solana', value: "aptos"},
        {title: 'Liquid Staking', value: "celo"},
        {title: 'Marketplaces', value: "core"},
        {title: 'Social', value: "fio"},
        {title: 'Games', value: "lisk"},
    ]);

    const isMyLimitShow = ref(props.isLimitShow)
    const dataSourceList = ref([]);

    const isShowLoading = ref(false)
    const onClickTab = ({ title }) => {
        console.log(title)

        isShowLoading.value = true
        const tabValue = tabsList.value[active.value]
        const requestUrl = active.value == 0 ? 'https://apis.dappradar.com/v2/dapps' : 'https://apis.dappradar.com/v2/dapps?chain=' + tabValue.value
        var { data } = useRequest(() => {
            return fetch(requestUrl, {
                headers: {
                    "x-api-key": "8tEEK2fQEz9UIfeU4Ev3f7mccbsQlaX2UeKWDCL5",
                }
            }).then(res => res.json())
            .catch(error => {
                isShowLoading.value = false
                console.error('Fetch error:', error); // 捕获 fetch 本身的错误（如网络问题、请求失败等）
            });
        })
        watch(data, (newValue) => {
            isShowLoading.value = false
            if (newValue.success == false) {
                return 
            }
            
            dataSourceList.value.length = 0
            for(var i = 0; i < newValue.results.length; i++) {
                const dAppData = newValue.results[i]
                if (dAppData.logo != null) {
                    dataSourceList.value.push({
                        id: dAppData.dappId,
                        title: dAppData.name,
                        subtitle: dAppData.description,
                        imgStr: dAppData.logo,
                        link: dAppData.link,
                    }) 
                    if (isMyLimitShow.value && dataSourceList.value.length > 3) {
                        break
                    }
                }
            }
        })
    };

    onClickTab("")
    return { active,
        tabsList,
        dataSourceList,
        onClickTab,
        isShowLoading,
     };
  },
  components: {
    GlobalLoading,
  },
  methods: {
    cellContentClick(item) {
        this.$emit('valueChanged', item)
    }
  }
};
</script>

<style>
.mydata_cell_containter {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    height: 60px;
}
</style>