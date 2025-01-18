<template>
    <div style="margin-top: 15px; margin-left: 15px; margin-right: 15px; text-align: left;">
        <div>
            <label class="global_super_big_primary_black_text_style">${{ cryptoDict.leftAllMoney }}</label>
        </div>
        <div>
            <label class="global_primary_black_small_text_style" :style="{color: cryptoDict.percent > 0 ? 'green':'red'}">
                {{ cryptoDict.percent > 0 ? '+':'' }}{{ cryptoDict.percent }}%</label>
        </div>
        <div style="width: 100%; height: 280px;">
            <CryptoChartLine :cryptoData="JSON.stringify(cryptoDict)"/>
        </div>
    </div>
</template>

<script>
import CryptoChartLine from './CryptoChartLine.vue';
import { ref } from 'vue';

export default {
    props: {
        cryptoData: {type: String}
    },
    setup(props) {
        const cryptoDict = ref(JSON.parse(props.cryptoData))

        return {
            cryptoDict,
        }
    },
    components: {
        CryptoChartLine,
    }
}
</script>