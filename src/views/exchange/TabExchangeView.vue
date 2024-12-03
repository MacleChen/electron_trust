<template>
    <div class="tab_exchange_container">
    
    <div class="from_div_style">
        <div style="height: 30px; display: flex;">
            <div class="cell_left_title_containter">
                <label class="sub_title_text_style">From</label>
                <img style="border: 1px solid lightgray; border-radius: 8px;margin-left: 5px;" src="../../assets/asserts/60_Normal.png" width="15px" height="15px"/>
                <label style="margin-left: 5px;" class="sub_title_text_style" @click="fromCryptoNetworkClick">{{ fromCryptoNetworkName }}</label>
                <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="15px" height="15px"/>
            </div>
                
            <div class="cell_right_title_containter">
                <img src="../../assets/asserts/defi-wallet-f_Normal@2x.png" width="13px" height="13px"/>
                <label style="margin-left: 5px; margin-right: 5px;" class="sub_title_text_style">0</label>
                <van-button color="#e5e5f6" style="color: blue; font-size: 10px; height: 15px;width: 30px;">Buy</van-button>
            </div>
        </div>
        <div style="width: 100%; height: 50px; display: flex; margin-top: 10px;">
            <div class="cell_left_title_containter">
                <img style="border: 1px solid lightgray; border-radius: 20px;" src="../../assets/asserts/60_Normal.png" width="40px" height="40px" />
                <label class="sub_title_text_style" style="margin: 10px;">{{ fromCryptoName }}</label>
                <img src="../../assets/asserts//Arrow Right (1)_Normal@3x.png" width="5px" height="10px"/>
            </div>
            <div class="cell_right_title_containter">
                <label class="sub_title_text_style" style="font-size: 30px;">0</label>
            </div>
        </div>
    </div>

    <div style="display: flex; justify-content: center; align-items: center;">
        <div style="margin-top: -10px; background-color: ghostwhite; width: 30px; height: 30px; border-radius: 15px; display: flex; justify-content: center; align-items: center;">
        <img @dragstart.prevent src="../../assets/asserts/trust_arrow_up_and_down_gray.png" width="20px"/>
        </div>
    </div>

    <div class="to_div_style">
        <div style="height: 30px; display: flex;">
            <div class="cell_left_title_containter">
                <label class="sub_title_text_style">To</label>
                <img style="border: 1px solid lightgray; border-radius: 8px;margin-left: 5px;" src="../../assets/asserts/60_Normal.png" width="15px" height="15px"/>
                <label style="margin-left: 5px;" class="sub_title_text_style" @click="toCryptoNetworkClick">{{ toCryptoNetworkName }}</label>
                <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="15px" height="15px"/>
            </div>
                
            <div class="cell_right_title_containter">
                <img src="../../assets/asserts/defi-wallet-f_Normal@2x.png" width="13px" height="13px"/>
                <label style="margin-left: 5px; margin-right: 5px;" class="sub_title_text_style">0</label>
            </div>
        </div>
        <div style="width: 100%; height: 50px; display: flex; margin-top: 10px;">
            <div class="cell_left_title_containter">
                <img style="border: 1px solid lightgray; border-radius: 20px;" src="../../assets/asserts/60_Normal.png" width="40px" height="40px" />
                <label class="sub_title_text_style" style="margin: 10px;">{{ toCryptoName }}</label>
                <img src="../../assets/asserts/Arrow Right (1)_Normal@3x.png" width="5px" height="10px"/>
            </div>
            <div class="cell_right_title_containter">
                <label class="sub_title_text_style" style="font-size: 30px;">0</label>
            </div>
        </div>
    </div>


    <div class="other_div_style">
        <van-circle style="margin-left: 10px;"
        v-model:current-rate="currentRate"
        :rate="30"
        size="20px"
        layer-color="#ebedf0"
        color="#000"
        :stroke-width="100"
        text=""
        />
        <label style="margin-left: 10px;" class="sub_title_text_style">1 {{ fromCryptoName }} ≈ 317。604893 {{ toCryptoName }} </label>
        <img style="margin-left: 5px;" src="../../assets/asserts/convert-horizontal-f_Normal@2x.png" width="15px" height="15px"/>
    </div>

    <van-button color="blue" block round style="margin-top: 20px; font-weight: bold;"
        type="primary">Connect wallet</van-button>
    </div>

    <van-action-sheet v-model:show="isShowAllNetwork" title="Networks">
        <AllNetworksAlert @valueChanged="allNetworkAlertCellClickCallback" /> 
    </van-action-sheet>
</template>

<script>
import { ref, computed } from 'vue';
import AllNetworksAlert from '../discover/widgets/Alert/AllNetworksAlert.vue';
export default {
  setup() {
    const currentRate = ref(0);
    const text = computed(() => currentRate.value.toFixed(0) + '%');

    const isShowAllNetwork = ref(false)
    const isFromCryptoClick = ref(true)
    const fromCryptoNetworkName = ref('Ethereum')
    const fromCryptoName = ref('ETH')
    const toCryptoNetworkName = ref('Ethereum')
    const toCryptoName = ref('UNI')

    return {
      text,
      currentRate,
      isShowAllNetwork,
      isFromCryptoClick,
      fromCryptoNetworkName,
      fromCryptoName,
      toCryptoNetworkName,
      toCryptoName,
    }
  },
  components: {
    AllNetworksAlert,
  },
  methods: {
    fromCryptoNetworkClick() {
        this.isShowAllNetwork = true
        this.isFromCryptoClick = true
    },
    toCryptoNetworkClick() {
        this.isShowAllNetwork = true
        this.isFromCryptoClick = false
    },
    allNetworkAlertCellClickCallback(item) {
        this.isShowAllNetwork = false
        alert(item.title)
        if (this.isFromCryptoClick) {
            this.fromCryptoNetworkName = item.title
        } else {
            this.toCryptoNetworkName = item.title
        }
    }
  }
};
</script>


<style>
.tab_exchange_container {
    margin-left: 15px;
    margin-right: 15px;
}

.from_div_style {
    margin-top: 20px;
    background-color:#f4f4f6;
    height: 130px;
    border-radius: 10px;
}
.to_div_style {
    margin-top: -13px;
    background-color:#f4f4f6;
    height: 120px;
    border-radius: 10px 10px 1px 1px;
}
.other_div_style {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1px;
    background-color:#f4f4f6;
    height: 44px;
    border-radius: 1px 1px 10px 10px;
}

.sub_title_text_style {
    font-size: 12px;
    font-weight: bold;
    color: rgb(193, 193, 193);
}

.cell_left_title_containter {
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
}
.cell_right_title_containter {
    display: flex; 
    margin-top: 10px;
    margin-right: 10px;
    justify-content: flex-end;
    align-items: center;
}
</style>