<template>
    <van-nav-bar :title="naviTitle" :border="false" :safe-area-inset-top="false" :fixed="true" :placeholder="true" @click-left="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>

        <template #right>
        <div style="display: flex; justify-content: center; align-items: center;">
            <div @click="navBarTabsClick"
            style="border: 1px solid blue; border-radius: 3px; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; margin-right: 15px;">
            <label style="color: blue;">3</label>
            </div>
            <img @click="show = true" @dragstart.prevent src="../../assets/asserts/menu-dots-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
        </div>
        </template>
  </van-nav-bar>
  
  <div>
    <webview
        ref="myWebview"
        :src="requestURL"
        style="width: 100%; height: 800px; display: inline-flex;"
        @dom-ready="onWebviewReady"
      ></webview>
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';
import { getLocalStorageDict, localStorageSetDict } from '@/utils/utils';
import { ipcRenderer } from 'electron'; // 引入 ipcRenderer

export default {
    setup() {
        const urlHistroyList = ref(getLocalStorageDict("urlList"))
        if (urlHistroyList.value == null) { urlHistroyList.value = [] }

        const route = useRoute()
        let requestURL = route.query.requestURL;
        console.log("myURL:" + requestURL);
        const show = ref(false);
        const actions = [
            { name: 'History' },
            { name: 'Favorite' },
        ];

        const newRequestURL = new URL(requestURL)
        const naviTitle = computed(() => newRequestURL.hostname)

        const isShowLoading = ref(true)
        const onWebviewReady = () => {
            console.log('Webview is ready');
            isShowLoading.value = false
        };

        return {
            show,
            actions,
            requestURL,
            naviTitle,
            isShowLoading,
            urlHistroyList,
            onWebviewReady,
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
                    this.urlHistroyList.push({title: this.requestURL, imgPath: newPath})
                    localStorageSetDict("urlList", this.urlHistroyList)
                    // alert("保存成功" + newPath)
                }).catch((err) => {
                    console.error('保存截图失败:', err);
                });
            }).catch((err) => {
                console.error('截图失败:', err);
            });
        },
    }
}
</script>