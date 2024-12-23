<template>
<div style="height: 200px; width: 176px; background-color: #f4f4f6; border-radius: 10px;">
    <div style="height: 30px; display: flex; justify-content: center; align-items: center;">
        <div class="item_content_cell_style" style="width: 50%; justify-content: left;">
            <img style="margin-left: 10px; border-radius: 8px;" :src="myDataDict.logo" width="15px" height="15px" object-fit="cover"/>
            <label style="margin-left: 7px;font-size: 10px; font-weight: bold;">{{ tabTitle }}</label>
        </div>

        <div class="item_content_cell_style" style="width: 50%; justify-content: flex-end; margin-right: 5px;">
            <img style="margin-left: 5px;" src="../../assets/asserts/circled-close-f_Normal@2x.png" width="15px" height="15px" @click="tabCellCloseImgClick"/>
        </div>
    </div>

    <div @click="tabCellClick">
        <img style="border-radius: 0px 0px 10px 10px; overflow: hidden; object-fit: cover;" :src="myDataDict.imgPath" width="100%" height="170px"/>
    </div>
</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    props: {
        dataDict: {type: String},
        indexDex: {type: Number}
    },
    setup(props) {
        const myDataDict = ref(JSON.parse(props.dataDict))
        var hostUrlStr = myDataDict.value.link
        if (hostUrlStr == null) { hostUrlStr = "https://www.baidu.com" }
        const myIndex = ref(props.indexDex)
        const newRequestURL = new URL(hostUrlStr)
        const tabTitle = computed(() => newRequestURL.hostname)

        return {
            myDataDict,
            hostUrlStr,
            tabTitle,
            myIndex,
        }
    },
    methods: {
        tabCellCloseImgClick() {
            this.$emit("valueDeleteChanged", this.myDataDict, this.myIndex)
        },
        tabCellClick() {
            this.$emit("valueCellChanged", this.myDataDict, this.myIndex)
        }
    }
}
</script>