<template>
      <div class="wallet_containter" @click="createWalletClick">
        <div class="left_iamge_containter">
          <van-image style="transform: translateY(-2000px); filter: drop-shadow(blue 0 2000px);" :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
        <van-space direction="vertical" fill :size="5" style="margin-left: 10px; margin-top: 15px;">
          <div class="home_cell1_title">{{ $t("homePage.createWallet") }}<label class="home_cell_flag">{{ $t("homePage.earnPoints") }}</label></div>
          <label class="home_cell1_sutitle">{{ $t("homePage.createSub") }}</label>
          <!-- <div style="display: flex;background-color: blue; justify-content: center; margin-left: 10px;margin-top: 15px;"></div>
          <div style="background-color: aquamarine;"></div> -->
        </van-space>
      </div>

      <div class="wallet_containter" style="margin-top: 20px;" @click="importWalletClick">
        <div class="left_iamge_containter">
          <van-image style="transform: translateY(-2000px); filter: drop-shadow(blue 0 2000px);" :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
        <van-space direction="vertical" fill :size="5" style="margin-left: 10px; margin-top: 15px;">
          <div class="home_cell1_title">{{ $t("homePage.existingWallet") }}<label class="home_cell_flag">{{ $t("homePage.earnPoints") }}</label></div>
          <label class="home_cell1_sutitle">{{ $t("homePage.existingSub") }}</label>
          <!-- <div style="display: flex;background-color: blue; justify-content: center; margin-left: 10px;margin-top: 15px;"></div>
          <div style="background-color: aquamarine;"></div> -->
        </van-space>
      </div>

</template>

<script>
import { Space,Image as VanImage } from 'vant';

export default {
    components: {
    [Space.name]: Space,
    [VanImage.name]: VanImage
  },
  methods: {
    createWalletClick() {
      this.$router.push({name: "createPasscode", query: {pageType: 'create' }})
    },
    importWalletClick() {
      this.$router.push({name: "createPasscode", query: {pageType: 'import' }})
    }
  }
}

</script>

<style>
.wallet_containter {
  display: flex;
  background-color: #f4f4f6;
  margin: 0;
  height: 60pt;
  border-radius: 10px;
  text-align: left;
}
.left_iamge_containter {
  display: flex;
  background-color: #e5e5f6;
  margin-left: 20px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.home_cell1_title {
  height: 20px;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  font-size: 16px;
  font-weight:bold;
  color: black;
  
}
.home_cell_flag {
  background-color: #dbdce4;
  color: #868d9a;
  font-size: 8px;
  border-radius: 3px;
  margin-left: 5px;
  height: 8px;
  padding: 4px;
}
.home_cell1_sutitle {
  font-size: 12px;
  color: #868d9a;
}
</style>