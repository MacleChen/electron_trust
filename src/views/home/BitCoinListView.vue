<template>
    <div class="header_containter">
        <!-- title -->
         <label style="width: 50%; text-align: left;color: gray;">热门代币</label>
         <label style="width: 50%; text-align: right;font-size: 12px; color: lightgray;">最新24h</label>
    </div>
    <div style="padding-bottom: 50px;">
        <ul v-for="item in bitCoinList" :key="item.title">
        <div class="bit_coin_cell_containter">
            <div style="width: 30px; height: 30px;">
                <img @dragstart.prevent :src="item.imgStr" width="100%" />
            </div> 
            <div style="flex-grow: 1;">
                <div style="display: flex;">
                    <label class="cell_left_title_containter" style="font-weight: bold;">{{ item.title }}</label> 
                    <label class="cell_right_title_containter" style="font-weight: bold;">{{ item.money }}</label>
                </div>
                <div style="display: flex;">
                    <label class="cell_left_title_containter">{{ item.subtitle }}</label>
                    <label v-if="item.percent > 0"  class="cell_right_title_containter" style="color: red;">{{ item.percent }}%</label>
                    <label v-if="item.percent == 0"  class="cell_right_title_containter" style="color: black;">{{ item.percent }}%</label>
                    <label v-if="item.percent < 0"  class="cell_right_title_containter" style="color: green;">{{ item.percent }}%</label>
                </div>
            </div>
        </div>
        </ul>
    </div>
    
</template>

<script>
import { ref } from 'vue';

const bitCoinList = ref([
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '-0.64', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '0.64', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '0.0', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '-0.64', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '-0.64', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', money: '$66692', percent: '-0.64', imgStr: require('../../assets/asserts/0_Normal.png')},
]);

export default {
    setup() {
        return {bitCoinList}
    }
}
</script>

<style>
.header_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; 
    width: 100%;
    height: 40px;
}
.bit_coin_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    height: 60px;
}
.cell_left_title_containter {
    flex: 1; 
    text-align: left;
    margin-left: 10px;
}
.cell_right_title_containter {
    flex: 1; 
    text-align: right;
}
</style>