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
    <iframe ref="myIframe" style="width: 100%; height: 800px;" :src="requestURL" frameborder="0"></iframe>
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
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
    setup() {
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
            show,
            actions,
            requestURL,
            myIframe,
            naviTitle
        }
    },
    methods: {
        navBarTabsClick() {
            this.$router.push({ name: 'discoverTabs' });
        },
        navBarLeftClick() {
            this.$router.back();
        },
    }
}
</script>