<template>
    <van-nav-bar title="Transak" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div> 
        <iframe ref="myIframe" style="width: 100%; height: 800px;" :src="requestURL" frameborder="0" 
        allow="camera;microphone;payment"></iframe>
    </div>
    <GlobalLoading  v-if="isShowLoading"/>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';
export default {
    setup() {
        let apiKey = '583c98c8-4325-453a-8865-b2c358c3e5fd'
        // let apiToken = 'Pj62UtscsVLi0RIX+W67FQ=='
        let queryParameters = ''
        let requestURL = "https://global-stg.transak.com/?apiKey=" + apiKey + "&" + queryParameters;
        console.log("myURL:" + requestURL);

        const newRequestURL = new URL(requestURL)
        const naviTitle = computed(() => newRequestURL.hostname)

        const myIframe = ref(null)

        const isShowLoading = ref(true)
        onMounted(() => {
            myIframe.value.addEventListener("load", () => {
                console.log('loading success')
                isShowLoading.value = false
            })
        })
        // onUnmounted(() => {
        //     myIframe.value.removeEventListener("load")
        // })

        window.addEventListener('message', (message) => {
            if (message.source !== myIframe.value) return;

            // To get all the events
            console.log('Event ID: ', message?.data?.event_id);
            console.log('Data: ', message?.data?.data);

            // This will trigger when the user marks payment is made
            if (message?.data?.event_id === 'TRANSAK_ORDER_SUCCESSFUL') {
                console.log('Order Data: ', message?.data?.data);
            }
        });
        return {
            requestURL,
            myIframe,
            naviTitle,
            isShowLoading,
        }
    },
    components: {
        GlobalLoading,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }
    }

}
</script>