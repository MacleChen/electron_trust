<template>
    <van-nav-bar :title="naviTitle" :border="false" :safe-area-inset-top="false" :fixed="true" :placeholder="true" @click-left="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>

        <template #right>
        <div style="display: flex; justify-content: center; align-items: center;">
            <div @click="navBarTabsClick"
            style="border: 1px solid blue; border-radius: 3px; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; margin-right: 15px;">
            <label style="color: blue;">{{ urlHistroyList.length }}</label>
            </div>
            <img @click="show = true" @dragstart.prevent src="../../assets/asserts/menu-dots-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
        </div>
        </template>
  </van-nav-bar>
  
  <div>
    <webview
        ref="myWebview"
        :src="requestURL"
        style="width: 100%; height: 750px; display: inline-flex;"
        @dom-ready="onWebviewReady"
      ></webview>
  </div>
  
  <div class="content_hcenter_vcenter" style="position: fixed; left: 0px; bottom: 0px; right: 0px; height: 50px; background-color: white;">
    <div class="content_hcenter_vcenter" style="width: 25%;" @click="webNaviLeftBackClick" ><img id="img_bottom_size" src="../../assets/asserts/chevron-left-f_Normal@2x.png" /></div>
    <div class="content_hcenter_vcenter" style="width: 25%;" @click="webNaviRightBackClick"><img id="img_bottom_size" src="../../assets/asserts/chevron-right-f-24_Normal@2x.png"/></div>
    <div class="content_hcenter_vcenter" style="width: 25%;" @click="webNaviFavoriteClick">
        <img v-if="isFavorite" id="img_bottom_size" src="../../assets/asserts/heart-f_Normal_selected@2x.png" />
        <img v-else id="img_bottom_size" src="../../assets/asserts/heart-f_Normal@2x.png" /></div>
    <div class="content_hcenter_vcenter" style="width: 25%;" @click="webNaviRefleshClick"><img id="img_bottom_size" src="../../assets/asserts/refresh-f_Normal@2x.png" /></div>
  </div>

  <!-- ActionSheet -->
  <van-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="Cancel"
  close-on-click-action
  @cancel="onCancel"
  @select="onSelect"
/>
<GlobalLoading  v-if="isShowLoading"/>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';
import { getLocalStorageDict, localStorageSetDict } from '@/utils/utils';
import { ipcRenderer } from 'electron'; // 引入 ipcRenderer
import { showToast } from 'vant';

export default {
    setup() {
        const urlHistroyList = ref(getLocalStorageDict("urlList"))
        if (urlHistroyList.value == null) { urlHistroyList.value = [] }

        const urlFavoriteList = ref(getLocalStorageDict("urlFavList"))
        if (urlFavoriteList.value == null) { urlFavoriteList.value = [] }

        const isFavorite = ref(false)
        const myWebview = ref(null); // 用来存储 webview 实例的引用

        const route = useRoute()
        let requestURL = route.query.requestURL;
        let webLogoImgStr = route.query.imgStr;
        console.log("myURL:" + requestURL);
        const show = ref(false);
        const actions = [
            { name: 'History' },
            { name: 'Favorite' },
        ];

        const newRequestURL = new URL(requestURL)
        const naviTitle = ref(newRequestURL.hostname) // computed(() => newRequestURL.hostname)

        const isShowLoading = ref(true)
        const onWebviewReady = () => {
            console.log('Webview is ready');
            isShowLoading.value = false
            if (myWebview.value) {
                myWebview.value.executeJavaScript('document.title').then((title) => {
                    console.log("title is:" + title)
                    naviTitle.value = title; // 更新页面标题
            });
      }
        };
        return {
            show,
            actions,
            requestURL,
            naviTitle,
            isShowLoading,
            urlHistroyList,
            urlFavoriteList,
            onWebviewReady,
            webLogoImgStr,
            isFavorite,
            myWebview,
        }
    },
    components: {
        GlobalLoading,
    },
    methods: {
        navBarTabsClick() {
            this.$router.push({ name: 'discoverTabs' });
        },
        navBarLeftClick() {
            this.captureScreenshot()
            this.$router.back();
        },
        captureScreenshot() {
            if (this.isShowLoading) {
                alert('WebView尚未加载完成，无法截图！');
                return
            }
            const webview = this.$refs.myWebview; // 获取 WebView 或 iframe 元素

            // 使用 webview.capturePage() 截图
            webview.capturePage().then((image) => {

                // 将截图数据发送到主进程保存
                ipcRenderer.invoke('save-screenshot', image.toPNG()).then((filePath) => {
                    console.log('截图已保存到:', filePath);
                    const newPath = `file://${filePath}`; // 将本地路径赋值给 img
                    const currentTimestamp = Date.now();
                    this.urlHistroyList.unshift({id: "history" + currentTimestamp, title: this.naviTitle, link: this.requestURL, imgPath: newPath, logo: this.webLogoImgStr})
                    localStorageSetDict("urlList", this.urlHistroyList)
                    // alert("保存成功" + newPath)
                }).catch((err) => {
                    console.error('保存截图失败:', err);
                });
            }).catch((err) => {
                console.error('截图失败:', err);
            });
        },
        webNaviLeftBackClick() {
            if (this.$refs.myWebview && this.$refs.myWebview.canGoBack()) {
                this.$refs.myWebview.goBack();
            }
        },
        webNaviRightBackClick() {
            if (this.$refs.myWebview && this.$refs.myWebview.canGoForward()) {
                this.$refs.myWebview.goForward();
            }
        },
        webNaviFavoriteClick() {
            const currentTimestamp = Date.now();
            this.urlFavoriteList.unshift({id: "favorite" + currentTimestamp, title: this.naviTitle, link: this.requestURL, logo: this.webLogoImgStr})
            localStorageSetDict("urlFavList", this.urlFavoriteList)
            showToast("Added to Favorite")
            this.isFavorite = true;
            
        },
        webNaviRefleshClick() {
            if (this.$refs.myWebview) {
                this.$refs.myWebview.reload();
            }
        }
    }
}
</script>

<style>
#img_bottom_size {
    width: 25px;
    height: 25px;
}
</style>