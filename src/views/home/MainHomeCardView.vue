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
            <label style="font-size: 14px; font-weight: bold;margin-left: 10px;" @click="mainWalletClick">Main Wallet</label>
            <img style="margin-left: 3px;" src="../../assets/asserts/icon-caret-down_Normal@2x.png" width="15px" height="15px" />
        </div>

        <!-- Main wallet -->
        <div class="content_hright_vcenter" style="width: 30%;">
            <div class="content_hcenter_vcenter" 
            @click="topRightCopyClick"
            style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px; margin-right: 10px;">
                <img src="../../assets/asserts/icon-copy_Normal@2x.png" width="15px" height="15px" />
            </div>

            <div class="content_hcenter_vcenter" 
            @click="topRightScanClick"
            style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px; margin-right: 10px;">
                <img src="../../assets/asserts/icon-qr-scan_Normal@2x.png" width="15px" height="15px" />
            </div>

            <div class="content_hcenter_vcenter" 
            @click="topRightNotificationClick"
            style="width: 30px; height: 30px; background-color: #f4f4f6; border-radius: 5px;">
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
        <div @click="sendCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/Vector_Normal_black_up@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Send</div>
        </div>

        <div style="margin-left: 20px;" @click="receiveCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/Vector_Normal_black_down@3x.png" width="15px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Receive</div>
        </div>

        <div style="margin-left: 20px;" @click="buyCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/icon-card_Normal_black@2x.png" width="20px"/>
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Buy</div>
        </div>

        <div style="margin-left: 20px;" @click="sellCryptoClick">
            <div class="content_hcenter_vcenter" style="width: 45px; height: 45px; background-color: #f4f4f6; border-radius: 25px;">
                <img src="../../assets/asserts/bank-f_Normal_black@2x_1.png" width="20px" />
            </div>
            <div style="font-size: 12px; font-weight: bold; margin-top: 8px;">Sell</div>
        </div>

        <div style="margin-left: 20px;" @click="historyCryptoClick">
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
                    <div class="content_hleft_vcenter" style="height: 80%; line-height: 15px; text-align: left" >
                        <label style="font-size: 12px; font-weight: bold; color: #21262f;">{{ item.title }}</label>
                    </div>
                    <div class="content_hleft_vcenter" style="height: 20%;" @click="startNextCardClick(item.pushName)">
                        <label style="color: blue; font-size: 12px; font-weight: bold;">{{ item.nextBtnName }}</label>
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
    <van-tab title="Crypto"><MainHomeCryptoList :isEncryptionMoney="isEncryptionMoney" ref="child" /></van-tab>
    <van-tab title="NFTs"><MainHomeNFTsDefault /></van-tab>
    </van-tabs>

    <div style="margin-top: 10px;" v-if="tabsActive == 0" @click="manageCryptoBottomClick">
        <label style="font-size: 12px; color: blue;">Manage crypto</label>
    </div>

    <!-- 搜索的浮窗 -->
    <van-overlay :show="isShowSearchOveryLay" z-index="100">
        <HomeSearchOverLay @cancelCallback="homeSearchOverLayCancel" />
    </van-overlay>

    <!-- 地址copyalert -->
    <van-action-sheet v-model:show="isShowYourAddress" title="Your address">
        <YourAddressesAlert @valueChanged="yourAddressesAlertCellClickCallback" /> 
    </van-action-sheet>

    <!-- 加载浮窗 -->
    <GlobalLoading  v-if="isShowLoading"/>
</div>
</template>

<script>
import { ref, defineExpose } from 'vue';
import MainHomeCryptoList from './MainHomeSubview/MainHomeCryptoList.vue';
import MainHomeNFTsDefault from './MainHomeSubview/MainHomeNFTsDefault.vue';
import HomeSearchOverLay from '../discover/widgets/OverLay/HomeSearchOverLay.vue';
import { showToast } from 'vant';
import GlobalLoading from '../discover/widgets/GlobalLoading.vue';
// import { showToast } from 'vant';
import YourAddressesAlert from '../discover/widgets/Alert/YourAddressesAlert.vue';
import useClipboard from 'vue-clipboard3';
import jsQR from 'jsqr';

const cardInfoList = ref([
    {title: 'Launchpool is Live! Simply Lock and Earn FREE Rewards!', 
    imgStr: require('../../assets/asserts/launchpool _ dm_Normal@2x.png'), pushName: 'money', nextBtnName: 'Join NOW'},
    {title: 'Buy crypto cheaper with Binance P2P today', 
    imgStr: require('../../assets/asserts/tw-card-payments-light_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Buy crypto'},
    {title: 'Earn up to 210 Trust Points daily to unlock future rewards', 
    imgStr: require('../../assets/asserts/Mystery Box _ dm_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Check now'},
    {title: 'Add crypto from Binance or Coinbase', 
    imgStr: require('../../assets/asserts/Transfer _ dm_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Deposit now'},
    {title: 'Buy crypto with the best quote', 
    imgStr: require('../../assets/asserts/tw-card-payments-dark_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Buy now'},
    {title: 'Earn up to 30% yield on -chain', 
    imgStr: require('../../assets/asserts/tw-savings-light_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Start eraning'},
    {title: 'View hot tokens opportunities on multiple chains', 
    imgStr: require('../../assets/asserts/tw-universe_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'View more'},
    {title: 'Blast swaps now available in Trust Wallet!', 
    imgStr: require('../../assets/asserts/BLAST_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: 'Get started'},
    {title: 'Stake $INJ on Trust Nodes and earn 12.5% APR', 
    imgStr: require('../../assets/asserts/INJ_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: "Stake $INJ"},
    {title: 'Say goodbye to those scam NFTs!', 
    imgStr: require('../../assets/asserts/NFTS_Normal@2x.png'), pushName: 'launchPoolView', nextBtnName: "Let's go"},
]);

export default {
    props: {
        isNeedRefresh: { type: Boolean } 
    },
    setup(props) {
        console.log(props.isNeedRefresh ? "1" : "0")
        const tabsActive = ref(0);
        const isShowSearchOveryLay = ref(false)
        const isEncryptionMoney = ref(false)
        const isShowYourAddress = ref(false)
        const isShowLoading = ref(false)

        const child = ref()

        const reloadCryptoListData = () => {
            // showToast("reload")
            child.value.reloadCryptoListData()
        }
        defineExpose({
            reloadCryptoListData,
        })
        return {
            cardInfoList,
            tabsActive,
            isShowSearchOveryLay,
            isEncryptionMoney,
            reloadCryptoListData,
            child,
            isShowYourAddress,
            isShowLoading,
        }
    },
    components: {
        MainHomeCryptoList,
        MainHomeNFTsDefault,
        HomeSearchOverLay,
        YourAddressesAlert,
        GlobalLoading,
    },
    methods:{
        mainHomeSearchBarClick() {
            this.isShowSearchOveryLay = true
        },
        homeSearchOverLayCancel() {
            this.isShowSearchOveryLay = false
        },
        eyeImageClick() {
            this.isEncryptionMoney = !this.isEncryptionMoney
        },
        manageCryptoBottomClick() {
            this.$router.push({ name: 'manageCryptoView' })
        },
        mainWalletClick() {
            this.$router.push({ name: 'settingWalletsView'})
        },
        topRightCopyClick() {
            this.isShowYourAddress = true
        },
        topRightScanClick() {
            const onImport = async () => {
                try {
                    const arrFile = await window.showOpenFilePicker({
                    types: [
                        {
                        accept: {
                            'image/*': ['.png', '.jpeg', '.jpg']
                        }
                        }
                    ],
                    multiple: false,
                    description: 'Images',
                    })
                    if (!arrFile || !arrFile.length) {
                    return
                    }
                    this.isShowLoading = true

                    const file = arrFile[0]
                    const fileData = await file.getFile()
                    const bitmap = await createImageBitmap(fileData);

                    // 创建 Canvas 来绘制图片并获取 ImageData
                    const canvas = document.createElement('canvas');
                    canvas.width = bitmap.width;
                    canvas.height = bitmap.height;
                    const context = canvas.getContext('2d');
                    context.drawImage(bitmap, 0, 0);

                    // 获取 ImageData
                    const imageData = context.getImageData(0, 0, bitmap.width, bitmap.height);
                    const dealjsQr = async () => {
                        const qrdata = await jsQR(imageData.data, imageData.width, imageData.height)
                        this.isShowLoading = false
                        if (qrdata != null && qrdata.data != null) {
                            alert(qrdata.data)
                        } else {
                            alert('unknown')
                        }
                    } ;
                    dealjsQr()
                    
                } catch (error) {
                    console.error(error)
                }
            }

            onImport()
        },
        topRightNotificationClick() {
            this.$router.push({name: 'notificationsView'})
        },
        yourAddressesAlertCellClickCallback(item) {
            showToast({message: 'Address copied:' + item.subTitle, position: 'bottom'})
            this.isShowYourAddress = false

            const { toClipboard } = useClipboard()
            const copy = async (text) => {
                try {
                    await toClipboard(text)
                } catch (e) {
                    console.error(e)
                }
            }
            copy(item.subTitle)
        },
        sendCryptoClick() {
            this.$router.push({name: 'sendCryptoView'})
        },
        receiveCryptoClick() {
            this.$router.push({name: 'receiveCryptoView'})
        },
        buyCryptoClick() {
            this.$router.push({name: 'buyCryptoView'})
        },
        sellCryptoClick() {
            this.$router.push({name: 'sellCryptoView'})
        },
        historyCryptoClick() {
            this.$router.push({name: 'historyCryptoView'})
        },
        startNextCardClick(pushName) {
            if (pushName == 'money') {
                this.$router.push({name: pushName, query: {isLaunchPool: true}})
            } else {
                this.$router.push({name: pushName})
            }
        } 
    },
}
</script>

<style>
  .my_home_swipe .van-swipe-item {
    color: #21262f;
    font-size: 20px;
    text-align: center;
  }
</style>