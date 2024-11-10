<template>
    <div style="margin-top: 100px; margin-bottom: 300px;">
        <h4 v-if="!isSurePasscode">Enter passcode</h4>
        <van-password-input
        :value="passcode"
        :gutter="10"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        class="custom-password-input"
        />
        
        <h5 style="margin-top: 40px;margin-left: 30px; margin-right: 30px; color: lightgray" v-if="!isSurePasscode">
            Enter your passcode. Be sure to remember it so you can unlock your wallet.</h5>
    </div>

    <!-- 确认数字键盘 -->
    <van-number-keyboard
    v-model="passcode"
    :show="showKeyboard"
    @blur="showKeyboard"
    />
  
</template>

<script>
import { showToast } from 'vant';
import { ref, inject } from 'vue';

export default {
    setup() {
        const passcode = ref('')
        const showKeyboard = ref(true)
        const globalVars = inject("globalVars")

        return {
            passcode,
            showKeyboard,
            globalVars
        }
    },
    watch:{
        passcode(newValue) {
            if (newValue.length === 6) {
                // check passcode
                if (newValue == this.globalVars.userSetPassword) {
                    showToast('密码验证成功')
                    this.passcode = ''
                    this.$emit('valueChanged', true)
                } else {
                    showToast('密码不正确，请再试一次')
                    this.passcode = ''
                }
            }
        }
    } 

}
</script>