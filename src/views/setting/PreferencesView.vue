<template>
    <div>
        <van-nav-bar title="Preferences" @click-left="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="padding-bottom: 50px;">
        <ul v-for="(item, index) in preferencesList" :key="item.title" @click="preferencesCellClick(index)">
        <div class="preferences_cell_containter">
            <div style="flex-grow: 1; display: flex; justify-content: center; align-items: center;">
                <div style="flex: 1;">
                    <div style="font-weight: bold; flex: 1; text-align: left;">{{ item.title }}</div> 
                    <div style="font-size: 14px; color: gray; flex: 1; text-align: left;" v-if="item.subtitle.length > 0">{{ item.subtitle }}</div> 
                </div>
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>
        </ul>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

const preferencesList = ref([
    {title: 'Currency', subtitle: 'USD', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'App Language', subtitle: 'English', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'DApp Browser', subtitle: '', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Node Settings', subtitle: '', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
    {title: 'Unlock UTXOs', subtitle: '', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
]);

export default {
    setup() {
        return { preferencesList }
    },
    methods: {
        navBarLeftClick() {
            history.back()
        },
        preferencesCellClick(index) {
        if (index == 1 ) {
            this.$router.push({ name: 'languageList' });
        }
    }
    }
}
</script>

<style>
.preferences_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}
</style>