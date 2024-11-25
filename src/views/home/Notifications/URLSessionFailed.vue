<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 250px;">
        <div>
            <img src="../../../assets/asserts/tw-error-2-light_Normal@2x.png" width="150px" />
        </div>

        <div style="margin-top: 20px;">
            <label class="global_primary_gray_text_style">{{ showDetailMessage }}</label>
        </div>

        <div class="global_primary_button_div_style" style="margin-top: 15px;" v-if="showBtnStr != null">
            <label>{{ showBtnStr }}</label>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        statusName: { type: String } 
    },
    setup(props) {
        const showDetailMessage = ref('')
        const showBtnStr = ref(null)

        if (props.statusName == null) {
            showDetailMessage.value = 'URLSessionTask failed with error: An SSL error has occurred and a secure connection to the server cannot be made.'
        } else if (props.statusName == 'buyCrypto') {
            showDetailMessage.value = 'URLSessionTask failed with error: An SSL error has occurred and a secure connection to the server cannot be made.'
            showBtnStr.value = "Continue"
        }

        return {
            showDetailMessage,
            showBtnStr,

        }
    }
}
</script>