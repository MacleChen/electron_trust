<template>
    <van-nav-bar :title="naviTitle" :border="false" :safe-area-inset-top="false" :fixed="true" :placeholder="true" @click-right="navBarLeftClick">
        <template #right>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
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

  <GlobalLoading  v-if="isShowLoading"/>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';

export default {
    setup() {
        const route = useRoute()
        let requestURL = route.query.requestURL;
        console.log("myURL:" + requestURL);

        const newRequestURL = new URL(requestURL)
        const naviTitle = computed(() => newRequestURL.hostname)

        const isShowLoading = ref(true)
        const onWebviewReady = () => {
            console.log('Webview is ready');
            isShowLoading.value = false
        };
        return {
            requestURL,
            naviTitle,
            isShowLoading,
            onWebviewReady,
        }
    },
    components: {
        GlobalLoading,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back();
        },
    }
}
</script>