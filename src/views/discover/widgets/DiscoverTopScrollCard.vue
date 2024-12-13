<template>
<div class="discover_scroll_top_container">
    <div style="width: 20%; padding-top: 10px;margin-right: 5px;">
        <img style="float: right; width: 35px; height: 35px;" :src="scrollDataDict.imageStr"/>
    </div>

    <div style="width: 80%; text-align: left;">
        <div class="left_title_style" style="margin-top: 5px; height: 20px;" >
            <label style="font-size: 10px; color: gray; font-weight: bold;">
                {{ scrollDataDict.title }}
            </label></div>
        <div class="left_title_style" style="margin-right: 40px;">
            <label style="font-size: 12px; font-weight: bold; color: black;line-height: 18px;">
            {{ scrollDataDict.subTitle }}
        </label></div>

        <div class="content_hspacebwn_vcenter" style="margin-right: 15px; margin-top: 8px;">
            <div class="content_hcenter_vcenter" style="padding-left: 5px; padding-right: 10px; height: 20px; background-color: black; border-radius: 5px;">
                <img style="float: right; width: 15px; height: 15px;" src="../../../assets/asserts/gift-1c_Normal_white@2x.png"/>
                <label style="font-size: 8px; color: white; margin-left: 4px;">
                    {{ scrollDataDict.flag }}</label>
            </div>

            <div class="content_hright_vcenter" style="width: 70px;">
                <label style="font-size: 12px; font-weight: bold; color: blue; margin-right: 4px;">Start</label>
                <img style="float: right; width: 20px; height: 20px;" src="../../../assets/asserts/arrow-right-f_Normal@2x.png"/>
            </div>
            
        </div>
    </div>

   
</div> 
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        scrollData: {type: String}
    },
    setup(props) {
        const scrollDataDict = ref(JSON.parse(props.scrollData))

        return {
            scrollDataDict,
        }
    }
}
</script>

<style>
.discover_scroll_top_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: top;
}

.left_title_style {
    display: flex; 
    justify-content: left; 
    align-items: center;
    text-align: left;
}
</style>