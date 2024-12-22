<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px; margin-bottom: 40px;">
        <div>
            <img :src="dataDict.imgStr" width="120px" height="120px" />
        </div>

        <div>
            <label class="global_primary_black_text_style" >{{ dataDict.title }}</label>
        </div>

        <div>
            <label class="global_desciption_text_style" >{{ dataDict.subTitle }}</label>
        </div>

        <div class="content_hcenter_vcenter" style="margin-top: 15px;">
            <div class="content_hcenter_vcenter" style="width: 45%; height: 50px; background-color: #f4f4f6; color: #0400f4; border-radius: 25px; margin-right: 15px;"
            @click="sureBtnClick(0)">
                <label>{{ dataDict.cancel }}</label>
            </div>
            <div class="content_hcenter_vcenter" style="width: 45%; height: 50px; background-color: #0400f4; color: white; border-radius: 25px; "
            @click="sureBtnClick(1)">
                <label>{{ dataDict.sure }}</label>
            </div>
        </div>
    </div>
</template>
    
<script>
import { ref  } from 'vue'; //watch, defineEmits
export default {
    props: {
        data: {type: String, required: true},
    },
    setup(props) {
        const dataDict = ref(JSON.parse(props.data))

        return {
            dataDict,
        }
    },
    methods: {
        sureBtnClick(index) {
            this.$emit("valueChanged", index)
        }
    }
}

</script>