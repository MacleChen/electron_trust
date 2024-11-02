<template>
    <van-nav-bar title="设置" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div>创建密码 {{ pageType }}</div>
    
    <van-button type="primary" @click="showLoadingClick">显示加载圈</van-button>
    <van-button type="danger" @click="hideLoadingClick">隐藏加载圈</van-button>
    
    <GlobalLoading v-if="showLoading"/>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';
export default {
    setup() {
        const route = useRoute()
        const pageType = route.query.pageType
        console.log(pageType)

        const showLoading = ref(false)
        return {
            pageType,
            showLoading,
        }
    },
    components: {
        GlobalLoading,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        showLoadingClick() {
            this.showLoading = true
        }, 
        hideLoadingClick() {
            this.showLoading = false
        }
    }
}
</script>