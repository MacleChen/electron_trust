<template>
    <van-tabs v-model:active="active">
  <van-tab v-for="(item, section) in tabsList" :title="item.title" :key="item.title">
    <ul v-for="(mydata, row) in dataSourceList" :key="mydata.title">
        <div class="mydata_cell_containter" @click="cellContentClick(section, row)">
            <div style="width: 35px; height: 35px;">
                <img @dragstart.prevent :src="mydata.imgStr" width="100%" />
            </div> 
            <div style="flex-grow: 1; margin-left: 10px;">
                <div style="display: flex;">
                    <label style="font-weight: bold; font-size: 14px;">{{ mydata.title }}</label> 
                </div>
                <div style="display: flex; width: 320px;">
                    <label class="ended_cell_bottom_cell_ellipsis" style="font-size: 12px;">{{ mydata.subtitle }}</label>
                </div>
            </div>
        </div>
    </ul>
  </van-tab>
</van-tabs>


</template>

<script>
import { ref } from 'vue';

const tabsList = ref([
    {title: 'Feature', value: "abc"},
    {title: 'DEX', value: "abc"},
    {title: 'Lending', value: "abc"},
    {title: 'Yield', value: "abc"},
    {title: 'BSC', value: "abc"},
    {title: 'Solana', value: "abc"},
    {title: 'Liquid Staking', value: "abc"},
    {title: 'Marketplaces', value: "abc"},
    {title: 'Social', value: "abc"},
    {title: 'Games', value: "abc"},
]);

const dataSourceList = ref([
    {title: 'Four', subtitle: 'Four.meme is a go-to platform for easily launching meme teach me again', imgStr: require('../../../assets/asserts/logo_Normal.png')},
    {title: 'Four', subtitle: 'Four.meme is a go-to platform for easily launching meme teach me again', imgStr: require('../../../assets/asserts/logo_Normal.png')},
    {title: 'Four', subtitle: 'Four.meme is a go-to platform for easily launching meme teach me again', imgStr: require('../../../assets/asserts/logo_Normal.png')},
    {title: 'Four', subtitle: 'Four.meme is a go-to platform for easily launching meme teach me again', imgStr: require('../../../assets/asserts/logo_Normal.png')},
    {title: 'Four', subtitle: 'Four.meme is a go-to platform for easily launching meme teach me again', imgStr: require('../../../assets/asserts/logo_Normal.png')},
]);

export default {
  setup() {
    const active = ref(0);
    return { active,
        tabsList,
        dataSourceList,
     };
  },
  methods: {
    cellContentClick(section, row) {
        this.$emit('valueChanged', section, row)
    }
  }
};
</script>

<style>
.mydata_cell_containter {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    height: 60px;
}
</style>