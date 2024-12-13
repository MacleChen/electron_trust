<template>
    <div class="discover_bottom_scroll_containter">
        <div style="width: 30px; height: 30px;">
            <img @dragstart.prevent :src="scrollDataDict.imgStr" width="100%"/>
        </div> 
        <div style="flex-grow: 1;">
            <div style="display: flex;">
                <label class="cell_left_title_containter" style="font-weight: bold;">{{ scrollDataDict.subtitle }}</label> 
                <label class="cell_right_title_containter" style="font-weight: bold;">${{ scrollDataDict.totalMoney }}</label>
            </div>
            <div style="display: flex;">
                <label class="cell_left_title_containter">{{ scrollDataDict.title}}</label>
                <label class="cell_right_title_containter" :style="{color: scrollDataDict.percent > 0 ? 'green' : 'red'}">{{ scrollDataDict.percent }}%</label>
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
.discover_bottom_scroll_containter {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
}
</style>