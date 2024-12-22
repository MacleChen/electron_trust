<template>
    <van-nav-bar title="Favorite" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="@/assets/asserts/delete-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px; text-align: left; line-height: 13px;">
        <div class="content_hleft_vcenter" v-for="item in urlFavoriteList" :key="item.id" style="margin-top: 10px;" @click="favoriteCellClick(item)">
            <div style="width: 12%;">
                <img :src="item.logo" style="height: 30px; width: 30px; border-radius: 8px;" />
            </div>

            <div style="width: 88%;">
                <div>
                    <label class="global_primary_black_small_text_style" style="font-weight: 100;">{{ item.title }}</label>
                </div>

                <div>
                    <label class="global_primary_black_small_text_style" style="font-size: 10px; font-weight: 100;">{{ item.link }}</label>
                </div>
            </div>
        </div>
    </div>

    <van-action-sheet v-model:show="isShowDeleteAlert" title=" ">
        <CommonAlertView :data="alertData" @valueChanged="alertBtnClick" />
    </van-action-sheet>
</template>

<script>
import { ref } from 'vue';
import CommonAlertView from '@/views/others/CommonAlertView.vue';
import { getLocalStorageDict, localStorageSetDict } from '@/utils/utils';

export default {
    setup() {
        const urlFavoriteList = ref(getLocalStorageDict("urlFavList"))
        if (urlFavoriteList.value == null) { urlFavoriteList.value = [] }

        const isShowDeleteAlert = ref(false)
        const alertData = JSON.stringify({title: "Delete favorites?", subTitle: "This will remove of your favorite dApps.",
            imgStr: require('@/assets/asserts/tw-warning-2-dark_Normal@2x.png'),
            cancel: "Cancel", sure: "Delete"
        })

        return {
            urlFavoriteList,
            isShowDeleteAlert,
            alertData
        }
    },
    components: {
        CommonAlertView,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.isShowDeleteAlert = true
        },
        alertBtnClick(index) {
            console.log(index + '')
            this.isShowDeleteAlert = false
            if (index == 1) {
                // 删除所有favorites
                this.urlFavoriteList = []
                localStorageSetDict("urlFavList", this.urlFavoriteList)
            }
        },
        favoriteCellClick(item) {
            // 重新查看网页
            this.$router.push({ name: 'dappWebView', query: { requestURL: item.link, imgStr: item.logo } })
        }
    }
}
</script>