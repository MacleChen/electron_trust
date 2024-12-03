<template>
    <div class="tab_exchange_container">
    
    <div class="from_div_style">
        <div style="height: 30px; display: flex;">
            <div class="cell_left_title_containter">
                <label class="sub_title_text_style">From</label>
                <img style="border: 1px solid lightgray; border-radius: 8px;margin-left: 5px;" :src="fromCryptoInfoModel.fromNetworkImage" width="15px" height="15px"/>
                <label style="margin-left: 5px;" class="sub_title_text_style" @click="fromCryptoNetworkClick">{{ fromCryptoInfoModel.fromNetworkName }}</label>
                <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="15px" height="15px"/>
            </div>
                
            <div class="cell_right_title_containter">
                <img src="../../assets/asserts/defi-wallet-f_Normal@2x.png" width="13px" height="13px"/>
                <label style="margin-left: 5px; margin-right: 5px;" class="sub_title_text_style">0</label>
                <van-button color="#e5e5f6" style="color: blue; font-size: 10px; height: 15px;width: 30px;" @click="buyCryptoBtnClick">Buy</van-button>
            </div>
        </div>
        <div style="width: 100%; height: 50px; display: flex; margin-top: 10px;">
            <div class="cell_left_title_containter" style="width: 40%;" @click="fromCryptoClick">
                <img style="border: 1px solid lightgray; border-radius: 20px;" :src="fromCryptoInfoModel.fromCryptoImage" width="40px" height="40px" />
                <label class="sub_title_text_style" style="margin: 10px;">{{ fromCryptoInfoModel.fromCryptoName }}</label>
                <img src="../../assets/asserts//Arrow Right (1)_Normal@3x.png" width="5px" height="10px"/>
            </div>
            <div class="cell_right_title_containter" style="width: 60%;">
                <input class="sub_title_text_style no-border my_tab_exchange_input" type="number" 
                ref="input"
                placeholder="0"
                style="width: 200px; font-size: 30px; text-align: right; background: transparent" v-model="moneyCount" label="" />
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
                <img style="border: 1px solid lightgray; border-radius: 8px;margin-left: 5px;" :src="toCryptoInfoModel.toNetworkImage" width="15px" height="15px"/>
                <label style="margin-left: 5px;" class="sub_title_text_style" @click="toCryptoNetworkClick">{{ toCryptoInfoModel.toNetworkName }}</label>
                <img src="../../assets/asserts/chevron-down-f_Normal@2x.png" width="15px" height="15px"/>
            </div>
                
            <div class="cell_right_title_containter">
                <img src="../../assets/asserts/defi-wallet-f_Normal@2x.png" width="13px" height="13px"/>
                <label style="margin-left: 5px; margin-right: 5px;" class="sub_title_text_style">0</label>
            </div>
        </div>
        <div style="width: 100%; height: 50px; display: flex; margin-top: 10px;">
            <div class="cell_left_title_containter" @click="toCryptoClick">
                <img style="border: 1px solid lightgray; border-radius: 20px;" :src="toCryptoInfoModel.toCryptoImage" width="40px" height="40px" />
                <label class="sub_title_text_style" style="margin: 10px;">{{ toCryptoInfoModel.toCryptoName }}</label>
                <img src="../../assets/asserts/Arrow Right (1)_Normal@3x.png" width="5px" height="10px"/>
            </div>
            <div class="cell_right_title_containter">
                <label class="sub_title_text_style" style="font-size: 30px;">0</label>
            </div>
        </div>
    </div>


    <div class="other_div_style">
        <van-circle style="margin-left: 10px;"
        v-model:current-rate="progress"
        :rate="progress"
        size="20px"
        layer-color="#ebedf0"
        color="#000"
        :stroke-width="100"
        text=""
        />
        <label style="margin-left: 10px;" class="sub_title_text_style">1 {{ fromCryptoName }} ≈ {{ ethToUniRate }} {{ toCryptoName }} </label>
        <img style="margin-left: 5px;" src="../../assets/asserts/convert-horizontal-f_Normal@2x.png" width="15px" height="15px"/>
    </div>

    <van-button color="blue" block round style="margin-top: 20px; font-weight: bold;"
        type="primary">Continue</van-button>
    </div>

    <van-action-sheet v-model:show="isShowAllNetwork" title="Networks">
        <AllNetworksAlert @valueChanged="allNetworkAlertCellClickCallback" /> 
    </van-action-sheet>
</template>

<script>
import { ref, inject, watch, onMounted, onBeforeUnmount } from 'vue';
import AllNetworksAlert from '../discover/widgets/Alert/AllNetworksAlert.vue';
import { useRequest } from 'vue-hooks-plus';
import axios from 'axios';
import { showToast } from 'vant';

// 启动定时器
const globarVars = inject("globalVars")

export default {
  setup() {
    const isShowAllNetwork = ref(false)
    const isFromCryptoClick = ref(true)
    const fromCryptoInfoModel = ref({id: "ethereum", fromNetworkName: 'Ethereum', fromNetworkImage: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
        fromCryptoName: 'ETH', fromCryptoImage: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628'
    })
    const toCryptoInfoModel = ref({id: "uniswap", toNetworkName: 'Ethereum', toNetworkImage: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    toCryptoName: 'UNI', toCryptoImage: 'https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669'
    })

    // 定义响应式数据
    const ethToUniRate = ref(null); // 存储 ETH 和 UNI 的汇率
    const progress = ref(100); // 加载圈进度（0-100）
    const loading = ref(false); // 是否正在加载数据
    const error = ref(null); // 错误信息

    let intervalId = null; // 汇率查询定时器
    let progressTimer = null; // 进度条更新定时器

    // 查询汇率的函数
    const fetchExchangeRate = async () => {
      try {
        loading.value = true;
        error.value = null; // 清空错误
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: fromCryptoInfoModel.value.id + ',' + toCryptoInfoModel.value.id,
          },
        });

        const data = response.data;
        const ethPrice = data.find(coin => coin.id === 'ethereum').current_price;
        const uniPrice = data.find(coin => coin.id === 'uniswap').current_price;

        // 计算汇率
        ethToUniRate.value = (ethPrice / uniPrice).toFixed(10); // 保留两位小数
        showToast("" + ethToUniRate.value)
      } catch (err) {
        error.value = 'Failed to fetch exchange rate';
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    // 启动进度条
    const startProgressBar = () => {
      // 确保清理旧的定时器
      if (progressTimer) {
        clearInterval(progressTimer);
      }
      progress.value = 100; // 初始化进度为100%
      const totalSteps = 10 * 10; // 每秒10步，10秒共100步
      let step = 0;
      progressTimer = setInterval(() => {
        step++;
        progress.value = 100 - (100 / totalSteps) * step; // 更新进度
        if (step >= totalSteps) {
          clearInterval(progressTimer); // 停止进度条更新
          progress.value = 0; // 最后确保进度为0
        }
      }, 100); // 每100ms更新一次进度
    };

    // 启动定时器
    onMounted(() => {
      fetchExchangeRate(); // 页面加载时立即查询一次
      startProgressBar(); // 开始进度条
      intervalId = setInterval(() => {
        fetchExchangeRate(); // 每隔10秒查询一次汇率
        startProgressBar(); // 每次重新启动进度条
      }, 10000); // 每隔10秒查询
    });

    // 清理定时器
    onBeforeUnmount(() => {
      if (intervalId) clearInterval(intervalId);
      if (progressTimer) clearInterval(progressTimer);
    });

    return {
      isShowAllNetwork,
      isFromCryptoClick,
      fromCryptoInfoModel,
      toCryptoInfoModel,
      ethToUniRate,
      progress,
      loading,
      error,
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
        if (this.isFromCryptoClick) {
            this.fromCryptoInfoModel = item
        } else {
            this.toCryptoInfoModel = item.title
        }
    },
    buyCryptoBtnClick() {
        const cryptoItem = {id: this.fromCryptoInfoModel.id, title: this.fromCryptoInfoModel.fromCryptoName, subTitle: this.fromCryptoInfoModel.fromNetworkName, 
                flag: this.fromCryptoInfoModel.fromNetworkName, imgName: this.fromCryptoInfoModel.fromCryptoImage}
        this.$router.push({name: 'buyCryptoDetailView', query: cryptoItem})
        
    },
    fromCryptoClick() {
        this.$router.push({name: 'selectAssetView'})
    },
    toCryptoClick() {
        this.$router.push({name: 'selectAssetView'})
    },
    updateFromCryptoAndToCryptoExchangeRate() {
        var { data } = useRequest(() => {
            return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='+ this.fromCryptoInfoModel.id +',' + this.toCryptoInfoModel.id, {
                headers: {
                    "OK-Access-Key": globarVars.globalOkLinkAccessKey,
                }
            }).then(res => res.json());
        })
        watch(data, (newValue) => {
            const ethPrice = newValue.find(coin => coin.id === 'ethereum').current_price;
            const uniPrice = newValue.find(coin => coin.id === 'uniswap').current_price;
            // 计算 ETH 和 UNI 之间的汇率
            this.ethToUniRate = ethPrice / uniPrice;
            alert(this.ethToUniRate)
        })
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

.my_tab_exchange_input::placeholder {
    color: rgb(193, 193, 193);
}
</style>