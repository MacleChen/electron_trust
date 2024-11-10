<template>
    <div class="content_hleft_vcenter" style="width: 100%; height: 60px; text-align: left;"
    v-for="item in cyptoCoinList" :key="item.title">
        <div style="width: 15%;">
            <img :src="item.imgStr" width="40px"/>
        </div>

        <div style="width: 65%;">
            <div class="content_hleft_vcenter">
                <label style="font-size: 16px; font-weight: bold;">{{ item.title }}</label>
                <label style="font-size: 12px; color: #868d9a; background-color: #f4f4f6; padding: 2px 5px 2px 5px; border-radius: 3px; margin-left: 5px;">
                    {{ item.subtitle }}</label>
            </div>

            <div>
                <label style="font-size: 12px; color: #868d9a;">${{ item.leftAllMoney }}</label>
                <label style="font-size: 10px; color: #5eba89; margin-left: 5px;">{{ item.percent }}%</label>
            </div>
        </div>

        <div style="width: 20%; text-align: right;">
            <div>
                <label style="font-size: 14px; font-weight: bold;">{{ isEncryptionMoney ? "****" : item.rightTopMoney }}</label>
            </div>
            <div>
                <label style="font-size: 10px; color: #868d9a;">{{ isEncryptionMoney ? "****" : "$" + item.rightBottomMoney }}</label>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';

const cyptoCoinList = ref([
    {title: 'BTC', subtitle: 'Bitcoin', leftAllMoney: '68798.46', percent: '+0.67', rightTopMoney: '0', rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', leftAllMoney: '68798.46', percent: '+0.67', rightTopMoney: '0', rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', leftAllMoney: '68798.46', percent: '+0.67', rightTopMoney: '0', rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', leftAllMoney: '68798.46', percent: '+0.67', rightTopMoney: '0', rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/0_Normal.png')},
    {title: 'BTC', subtitle: 'Bitcoin', leftAllMoney: '68798.46', percent: '+0.67', rightTopMoney: '0', rightBottomMoney:'0.00', imgStr: require('../../../assets/asserts/0_Normal.png')},
]);

export default {
    props: {
        isEncryptionMoney: { type: Boolean } 
    },
    setup(props) {
        console.log(props.isEncryptionMoney ? "1": "2")
        // const props = defineProps({
        //     isEncryptionMoney : Boolean
        // })

        // watch(() => props.isEncryptionMoney, (newValue) => {
        //     showToast(newValue ? "1":"2")
        // })

        return {
            cyptoCoinList,
        }
    },
    methods:{
        formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>