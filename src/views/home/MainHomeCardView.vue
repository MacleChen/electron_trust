<template>
    <van-search
  v-model="value"
  shape="round"
  background="#fff"
  placeholder="Search"
    disable
    readonly
  @click="mainHomeSearchBarClick"
/>

<div style="margin-left: 15px; margin-right: 15px;">
    <div class="content_hleft_vcenter" style="width: 100%; height: 40px;">
        <div class="content_hleft_vcenter" style="width: 70%;">
            <div @click="eyeImageClick">
                <img v-if="!isEncryptionMoney" src="../../assets/asserts/icon-eye-show_Normal@2x.png" width="15px" height="15px" />
                <img v-else src="../../assets/asserts/icon-eye-hide_Normal@2x.png" width="15px" height="15px" />
            </div> 
            <label style="font-size: 14px; font-weight: bold;margin-left: 10px;">Main Wallet</label>
            <img style="margin-left: 3px;" src="../../assets/asserts/icon-caret-down_Normal@2x.png" width="15px" height="15px" />
        </div>

        <!-- Main wallet -->
        <div class="content_hright_vcenter" style="width: 30%;">
            <div class="content_hcenter_vcenter" style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px; margin-right: 10px;">
                <img src="../../assets/asserts/icon-copy_Normal@2x.png" width="15px" height="15px" />
            </div>

            <div class="content_hcenter_vcenter" style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px; margin-right: 10px;">
                <img src="../../assets/asserts/icon-qr-scan_Normal@2x.png" width="15px" height="15px" />
            </div>

            <div class="content_hcenter_vcenter" style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px;">
                <img src="../../assets/asserts/icon-notifications_Normal@2x.png" width="15px" height="15px" />
            </div>
        </div>
    </div>

    <!-- money count -->
    <div style="text-align: left;">
        <label style="font-size: 30px; font-weight: bold">{{ isEncryptionMoney ? "*****" : "$0.00" }}</label>
    </div>

    <!-- trade button -->
     <div class="content_hcenter_vcenter" style="margin-top: 20px;">
        <div>
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/Vector_Normal_black_up@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Send</div>
        </div>

        <div style="margin-left: 20px;">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/Vector_Normal_black_down@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Receive</div>
        </div>

        <div style="margin-left: 20px;">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/icon-card_Normal_black@2x.png" width="20px"/>
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Buy</div>
        </div>

        <div style="margin-left: 20px;">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/bank-f_Normal_black@2x_1.png" width="20px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Shell</div>
        </div>

        <div style="margin-left: 20px;">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/icon-history_Normal_black@2x.png" width="20px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">History</div>
        </div>
     </div>

     <!-- 卡片展示 -->
    <div style="margin-top: 20px; border-radius: 10px; background-color: #f4f4f6; width: 360px;">
        <van-swipe class="my_home_swipe" :autoplay="3000">
        <van-swipe-item 
        v-for="item in cardInfoList" :key="item">
            <div class="content_hleft_vtop" style="margin-top: 10px">
                <div style="width: 25%;">
                    <img :src="item.imgStr" width="60px" />
                </div>

                <div style="width: 65%; height: 60px;">
                    <div style="height: 50%; line-height: 15px; text-align: left;" >
                        <label style="font-size: 12px; font-weight: bold; color: #21262f;">{{ item.title }}</label>
                    </div>
                    <div class="content_hleft_vcenter" style="height: 50%; margin-top: 5px;">
                        <label style="color: blue; font-size: 12px; font-weight: bold;">Check now</label>
                        <img style="margin-left: 5px;" src="../../assets/asserts/arrow-right-f_Normal_blue@2x.png" width="15px" />
                    </div>
                </div>

                <div style="width: 10%;">
                    <img src="../../assets/asserts/close-f_Normal@2x.png" width="15px" />
                </div>
            </div>
        </van-swipe-item>

        <template #indicator="{ active, total }">
            <div class="content_hcenter_vcenter" style="margin-bottom: 10px;">
                <div style="width: 10px; height: 2px; border-radius: 1px; margin-left: 3px; margin-right: 3px;" 
                v-for="index in total" :key="index" 
                :style="{backgroundColor: index == active + 1  ? '#21262f':'#868d9a'}"></div>
            </div>
        </template>
        </van-swipe>
    </div>

    <!-- 标签栏切换 -->
    <van-tabs v-model:active="tabsActive" color="blue">
    <van-tab title="Crypto"><MainHomeCryptoList :isEncryptionMoney="isEncryptionMoney"/></van-tab>
    <van-tab title="NFTs"><MainHomeNFTsDefault /></van-tab>
    </van-tabs>

    <div style="margin-top: 10px;" v-if="tabsActive == 0">
        <label style="font-size: 12px; color: blue;">Manage crypto</label>
    </div>

    <van-overlay :show="isShowSearchOveryLay" z-index="100">
        <HomeSearchOverLay @cancelCallback="homeSearchOverLayCancel" />
    </van-overlay>
</div>
</template>

<script>
import { ref } from 'vue';
import MainHomeCryptoList from './MainHomeSubview/MainHomeCryptoList.vue';
import MainHomeNFTsDefault from './MainHomeSubview/MainHomeNFTsDefault.vue';
import HomeSearchOverLay from '../discover/widgets/OverLay/HomeSearchOverLay.vue';

const cardInfoList = ref([
    {title: 'Launchpool is Live! Simply Lock and Earn FREE Rewards!', imgStr: require('../../assets/asserts/launchpool _ dm_Normal@2x.png')},
    {title: 'Earn up to 210 Trust Points daily to unlock future rewards', imgStr: require('../../assets/asserts/Mystery Box _ dm_Normal@2x.png')},
    {title: 'Add crypto from Binance or Coinbase', imgStr: require('../../assets/asserts/Transfer _ dm_Normal@2x.png')},
    {title: 'Buy crypto with the best quote', imgStr: require('../../assets/asserts/tw-card-payments-dark_Normal@2x.png')},
    {title: 'Earn up to 30% yield on -chain', imgStr: require('../../assets/asserts/tw-savings-light_Normal@2x.png')},
    {title: 'Back up to secure vour assets', imgStr: require('../../assets/asserts/tw-lock_Normal@2x.png')},
    {title: 'View hot tokens opportunities on multiple chains', imgStr: require('../../assets/asserts/tw-universe_Normal@2x.png')},
    {title: 'Blast swaps now available in Trust Wallet!', imgStr: require('../../assets/asserts/BLAST_Normal@2x.png')},
    {title: 'Stake $INJ on Trust Nodes and earn 12.5% APR', imgStr: require('../../assets/asserts/INJ_Normal@2x.png')},
    {title: 'Say goodbye to those scam NFTs!', imgStr: require('../../assets/asserts/NFTS_Normal@2x.png')},
]);

export default {
    setup() {
        const tabsActive = ref(0);
        const isShowSearchOveryLay = ref(false)

        const isEncryptionMoney = ref(false)
        return {
            cardInfoList,
            tabsActive,
            isShowSearchOveryLay,
            isEncryptionMoney,
        }
    },
    components: {
        MainHomeCryptoList,
        MainHomeNFTsDefault,
        HomeSearchOverLay
    },
    methods:{
        formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        mainHomeSearchBarClick() {
            this.isShowSearchOveryLay = true
        },
        homeSearchOverLayCancel() {
            this.isShowSearchOveryLay = false
        },
        eyeImageClick() {
            this.isEncryptionMoney = !this.isEncryptionMoney
        }
    }
}
</script>

<style>
  .my_home_swipe .van-swipe-item {
    color: #21262f;
    font-size: 20px;
    text-align: center;
  }
</style>