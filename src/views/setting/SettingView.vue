<template>
    
    <van-nav-bar title="设置" @click-right="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="padding-bottom: 50px;">
        <ul v-for="(item, index) in settingList" :key="item.title" @click="settingCellClick(index)">
        <div class="setting_cell_containter">
            <div style="width: 20px; height: 20px;">
                <img @dragstart.prevent :src="item.imgStr" width="100%" />
            </div> 
            <div style="flex-grow: 1; display: flex; justify-content: center; align-items: center;">
                <label style="font-weight: bold; flex: 1; text-align: left; margin-left: 10px;">{{ item.title }}</label> 
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { showToast } from 'vant';

const settingList = ref([
    {title: 'Preferences', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Help Center', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Support', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'About', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'X(formerly Twitter)', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Telegram', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Facebook', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Reddit', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'YouTube', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Instagram', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
]);

export default {
    setup() {
        return { settingList }
    },
    name: 'SettingView',
    components: {
    },
    methods: {
        navBarLeftClick() {
            history.back(); // 使用浏览器的前进后退功能实现返回 
    },
    settingCellClick(index) {
        showToast('提示内容' + index);
        if (index == 0 ) {
            this.$router.push({ name: 'preferences' });
        }
    }
    }
 }
</script>

<style>
.setting {
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* 你想要的背景颜色 */
}
.setting_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}
</style>