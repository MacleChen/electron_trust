<template>
    <van-nav-bar title="Preferences" @click-right="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="padding-bottom: 50px;">
        <ul v-for="(item, index) in countrysList" :key="item.title" @click="languagesCellClick(index)">
        <div class="language_cell_containter">
            <label style="font-weight: bold; flex: 1; text-align: left; margin-left: 10px;">{{ item.title }}</label> 
            <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
        </div>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { showToast } from 'vant';

const countrysList = ref([
    {title: 'English', subtitle: 'USD', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'China', subtitle: 'English', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
]);

export default {
    setup() {
        return { countrysList }
    },
    methods: {
        navBarLeftClick() {
            history.back()
        },
        languagesCellClick(index) {
            var item = countrysList[index];
            showToast("已切换到:" + item)
            // 切换语言
        }
    }
}
</script>

<style>
.language_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-left: 20px;
}
</style>

