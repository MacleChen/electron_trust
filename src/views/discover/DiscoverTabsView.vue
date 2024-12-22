<template>
    <div>
        <van-nav-bar :title="urlHistroyList.length + ' tabs'" @click-left="navBarLeftClick" @click-right="navBarRightClick">
        <template #left>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../assets/asserts/delete-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    
    <van-grid :border="false" :column-num="2">
    <van-grid-item v-for="(item, index) in urlHistroyList" :key="item.id">
        <DiscoverTabCard  :dataDict="JSON.stringify(item)" :indexDex="index" @valueDeleteChanged="discoverTabCardDeleteClick" @valueCellChanged="discoverTabCardCellClick"/>
    </van-grid-item>

    <van-grid-item>
        <DiscoverAddTabCard />
    </van-grid-item>
    </van-grid>

    </div>
    
    <van-action-sheet v-model:show="isShowDeleteAlert" title=" ">
        <CommonAlertView :data="alertData" @valueChanged="alertBtnClick" />
    </van-action-sheet>
    
</template>

<script>
import { ref } from 'vue';
import DiscoverTabCard from './DiscoverTabCard.vue';
import DiscoverAddTabCard from './DiscoverAddTabCard.vue';
import { getLocalStorageDict, localStorageSetDict } from '@/utils/utils';
import CommonAlertView from '../others/CommonAlertView.vue';


export default {
    setup() {

        const urlHistroyList = ref(getLocalStorageDict("urlList"))
        if (urlHistroyList.value == null) { urlHistroyList.value = [] }

        const isShowDeleteAlert = ref(false)
        const alertData = JSON.stringify({title: "Clear all tabs?", subTitle: "This will close all opened dApps, but you can find them again under History.",
            imgStr: require('@/assets/asserts/tw-warning-2-dark_Normal@2x.png'),
            cancel: "Cancel", sure: "Clear all"
        })

        return {
            urlHistroyList,
            isShowDeleteAlert,
            alertData,
         }
    },
    components: {
        DiscoverTabCard,
        DiscoverAddTabCard,
        CommonAlertView,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back();
        },
        navBarRightClick() {
            this.isShowDeleteAlert = true
        },
        settingCellClick(index) {
            if (index == 0 ) {
                this.$router.push({ name: 'preferences' });
            }
        },
        alertBtnClick(index) {
            console.log(index + '')
            this.isShowDeleteAlert = false
            if (index == 1) {
                // 删除所有tabs
                this.urlHistroyList = []
                localStorageSetDict("urlList", this.urlHistroyList)
            }
        },
        discoverTabCardDeleteClick(item, index) {
            console.log(item.title + index)
            this.urlHistroyList.splice(index, 1)
            localStorageSetDict("urlList", this.urlHistroyList)
        },
        discoverTabCardCellClick(item, index) {
            console.log(item.title + index)
            // 重新查看网页
            this.$router.push({ name: 'dappWebView', query: { requestURL: item.link, imgStr: item.logo } })
        }
    }
 }
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
.setting {
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* 你想要的背景颜色 */
}
.setting_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}

</style>