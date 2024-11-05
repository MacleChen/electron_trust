<template>
    <van-nav-bar :title="naviTitle" :border="false" :safe-area-inset-top="false" :fixed="true" :placeholder="true" @click-right="navBarLeftClick">
        <template #right>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
  </van-nav-bar>
  
  <div> 
    <iframe ref="myIframe" style="width: 100%; height: 800px;" :src="requestURL" frameborder="0"></iframe>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute()
        let requestURL = route.query.requestURL;
        console.log("myURL:" + requestURL);

        const newRequestURL = new URL(requestURL)
        const naviTitle = computed(() => newRequestURL.hostname)

        const myIframe = ref(null)
        onMounted(() => {
            myIframe.value.addEventListener("load", () => {
                console.log('loading success')
            })
        })
        // onUnmounted(() => {
        //     myIframe.value.removeEventListener("load")
        // })
        return {
            requestURL,
            myIframe,
            naviTitle
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back();
        },
    }
}
</script>