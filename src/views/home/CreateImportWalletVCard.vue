<template>
    <div class="wallet_containter">
        <div class="left_iamge_containter">
          <van-image :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
        <van-space direction="vertical" fill :size="5" style="margin-left: 10px; margin-top: 15px;">
          <div class="home_cell1_title">创建一个新钱包<label class="home_cell_flag">赚取积分</label></div>
          <label class="home_cell1_sutitle">创建新的多链钱包</label>
          <!-- <div style="display: flex;background-color: blue; justify-content: center; margin-left: 10px;margin-top: 15px;"></div>
          <div style="background-color: aquamarine;"></div> -->
        </van-space>
      </div>

      <div class="wallet_containter" style="margin-top: 20px;">
        <div class="left_iamge_containter">
          <van-image :src="require('../../assets/asserts/arrow-down-f_Normal@2x.png')" width="20px" />
        </div>
        <van-space direction="vertical" fill :size="5" style="margin-left: 10px; margin-top: 15px;">
          <div class="home_cell1_title">添加已有钱包<label class="home_cell_flag">赚取积分</label></div>
          <label class="home_cell1_sutitle">导入、恢复或仅限查看</label>
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
}

</script>

<style>
.wallet_containter {
  display: flex;
  background-color: #cfcfcf;
  margin: 0;
  height: 60pt;
  border-radius: 10px;
  text-align: left;
}
.left_iamge_containter {
  display: flex;
  background-color: #afafaf;
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
  background-color: #888888;
  color: #525252;
  font-size: 10px;
  border-radius: 3px;
  margin-left: 5px;
  height: 15px;
  padding-left: 2px;
  padding-right: 2px;
}
.home_cell1_sutitle {
  font-size: 12px;
  color: rgb(138, 138, 138);
}
</style>