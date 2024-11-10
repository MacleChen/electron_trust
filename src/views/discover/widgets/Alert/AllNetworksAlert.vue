<template>
    <van-search
            v-model="value"
            shape="round"
            background="#fff"
            placeholder="Search"
            @search="onSearch"
            />

    <div class="content_hleft_vcenter" style="height: 40px; margin-left: 15px; margin-right: 15px;"
        v-for="(item, index) in networkList" :key="index"
        @click="cellContentClick(item, index)">
        <div style="width: 10%; text-align: left">
            <img :src="item.imgStr" width="25px" />
        </div>

        <div style="width: 80%; text-align: left;">
            <label class="global_primary_black_text_style">{{ item.title }}</label>
        </div>

        <div style="width: 10%;">
            <img v-if="item.isSelected" src="../../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" width="20px" />
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const networkList = ref([
            {title: 'All Networks', isSelected: true, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'BitCoin', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Ethereum', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'BNB Beacon Chain', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'XRP', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
            {title: 'Bitcoin Cash', isSelected: false, imgStr: require('../../../../assets/asserts/0_Normal.png')},
        ]);

        return {
            networkList
        }

    },
    methods: {
        cellContentClick(item, index) {
            for(let i  = 0; i < this.networkList.length; i++) {
                this.networkList[i].isSelected = index == i
            }
            this.$emit("valueChanged", item)
        }
    }
}
</script>