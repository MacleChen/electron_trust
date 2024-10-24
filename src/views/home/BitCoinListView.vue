<template>
    <div class="header_containter">
        <!-- title -->
         <label style="width: 50%; text-align: left;color: gray;">热门代币</label>
         <label style="width: 50%; text-align: right;font-size: 12px; color: lightgray;">最新24h</label>
    </div>

    <ul v-for="item in bitCoinList" :key="item.title">
        <div class="bit_coin_cell_containter">
            <div style="float: left; margin-top: 15px; margin-left: 15px; background-color: yellow;">
                <img :src="item.imgStr" width="30px" />
            </div> 
            <div style="float: left;">
                <div style="background-color: bisque;">
                    <label style="text-align: left; width: 50%;">{{ item.title }}</label> <label style="text-align: right; width: 50%;">{{ item.title }}</label>
                </div>
                <div>
                    <label>{{ item.subtitle }}</label><label>{{ item.subtitle }}</label>
                </div>
            </div>
        </div>
        
    </ul>
</template>

<script>
import { ref } from 'vue';

const bitCoinList = ref([
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
    {title: 'abc', subtitle: 'edff', imgStr: require('../../assets/asserts/0_Normal.png')},
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
    background-color: red;
    margin-bottom: 5px;
    width: 100%;
    height: 60px;
}
</style>