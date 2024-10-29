<template>
    <div>
        <van-nav-bar title="3 tabs" @click-left="navBarLeftClick" >
        <template #left>
            <img src="../../assets/asserts/close-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../assets/asserts/delete-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    
    <van-grid :border="false" :column-num="2">
    <van-grid-item>
        <div style="height: 200px; background-color: lightslategray;">
            <div style="height: 50px; display: flex; align-items: center;">
                <div class="item_content_cell_style" style="width: 50%; justify-content: left;">
                    <img style="margin-left: 5px;" src="../../assets/asserts/viacoin_Normal.png" width="15px" height="15px"/>
                    <div style="margin-left: 10px; ">
                        <div>
                            <label style="font-size: 10px; font-weight: bold; color: black;">four.meme</label>
                        </div>
                    </div>
                    
                </div>

                <div class="item_content_cell_style" style="width: 50%; justify-content: flex-end;">
                    <img style="margin-left: 5px;" src="../../assets/asserts/viacoin_Normal.png" width="15px" height="15px"/>
                </div>
            </div>


            <div>

            </div>
        </div>
    </van-grid-item>
    <van-grid-item>
        <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
        />
    </van-grid-item>
    <van-grid-item>
        <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
        />
    </van-grid-item>
    </van-grid>

    </div>
    
</template>

<script>
import { ref } from 'vue';

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
    components: {
    },
    methods: {
        navBarLeftClick() {
            this.$router.back();
    },
    settingCellClick(index) {
        if (index == 0 ) {
            this.$router.push({ name: 'preferences' });
        }
    }
    }
 }
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
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