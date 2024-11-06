<template>
    <van-nav-bar title="Passcode" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    
    <div class="create_passcode_container">
        <h4 v-if="!isSurePasscode">Create passcode</h4>
        <h4 v-if="isSurePasscode">Confirm passcode</h4>
    
        <!-- 密码输入框 -->
        <van-password-input v-if="!isSurePasscode"
        :value="passcode"
        :gutter="10"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        class="custom-password-input"
        />
        <!-- 确认数字键盘 -->
        <van-number-keyboard v-if="!isSurePasscode"
        v-model="passcode"
        :show="showKeyboard"
        @blur="showKeyboard = false"
        />

        <!-- 确认密码输入框 -->
        <van-password-input v-if="isSurePasscode"
        :value="surePasscode"
        :gutter="10"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        class="custom-password-input"
        />
        <!-- 确认数字键盘 -->
        <van-number-keyboard v-if="isSurePasscode"
        v-model="surePasscode"
        :show="showKeyboard"
        @blur="showKeyboard = false"
        />

        <h5 style="margin-top: 40px;margin-left: 30px; margin-right: 30px; color: lightgray" v-if="!isSurePasscode">
            Enter your passcode. Be sure to remember it so you can unlock your wallet.</h5>

        <h5 style="margin-top: 40px;margin-left: 30px; margin-right: 30px; color: lightgray" v-if="isSurePasscode">
            Re-enter your passcode. Be sure to remember it so you can unlock your wallet.</h5>
    </div>
</template>

<script>
import { showToast } from 'vant';
import { ref, watch, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const globalVars = inject("globalVars")
        const route = useRoute()
        const router = useRouter()
        const pageType = route.query.pageType
        console.log(pageType)

        const showLoading = ref(false)

        const isSurePasscode = ref(false)
        const passcode = ref('')
        const surePasscode = ref('')
        const showKeyboard = ref(true)

        watch(passcode, (newValue) => {
            if (newValue.length === 6) {
                isSurePasscode.value = true
            }
        })
        watch(surePasscode, (newValue) => {
            if (newValue.length === 6) {
                if (newValue == passcode.value) {
                    globalVars.userSetPassword = passcode.value
                    localStorage.setItem("pwd", passcode.value)
                    router.push({ name: "createNewWalletView", query: { passcode: passcode.value } })
                } else {
                    showToast('Incorrect. Please try again.')
                    isSurePasscode.value = false
                    passcode.value = ''
                    surePasscode.value = ''
                }
            }
        })

        return {
            pageType,
            showLoading,
            isSurePasscode,
            passcode,
            surePasscode,
            showKeyboard,
        }
    },
    components: {
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

<style>
.create_passcode_container {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 250px;

}
.custom-password-input .van-password-input__item {
  /* 设置您想要的背景颜色 */
  border: #f0f0f0 solid 1px;
  border-radius: 3px;
}
</style>