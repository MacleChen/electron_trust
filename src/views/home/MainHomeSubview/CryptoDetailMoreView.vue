<template>
    <van-nav-bar title="Stake INJ" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #title>
            <div>
                <div>
                    <label class="global_primary_black_text_style">BTC</label>
                </div>

                <div style="margin-top: -5px;">
                    <label class="global_desciption_text_style">COIN</label>
                    <van-divider vertical />
                    <label class="global_desciption_text_style">Bitcoin</label>
                </div>
            </div>
        </template>
    </van-nav-bar>
     
    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px; text-align: left;">
        <div class="content_hleft_vcenter" >
            <img src="../../../assets/asserts/0_Normal.png" width="24px" height="24px" style="border: #f4f4f6 solid 1px; border-radius: 13px;"/>
            <label class="global_super_big_primary_black_text_style" style="margin-left: 5px;">Dogecoin</label>
        </div>

        <div style="margin-top: 1px;">
            <label class="global_desciption_text_style" style="font-weight: bold;">$0.3325</label>
            <label class="global_desciption_text_style" style="font-weight: bold; margin-left: 5px; color: #5eba89;">+1.95%</label>
        </div>

        <div style="width: 100%; height: 280px;">
            <CryptoChartLine />
        </div>

        <div>
            <label class="global_primary_black_text_style">About DOGE</label>
        </div>
        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style" :class="isReadMore ? 'multi-line-label':'single-line-label'">
                Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide. Introduced as a joke currency on 6 December 2013, Dogecoin quickly developed its own online community.</label>
        </div>
        <div>
            <label class="global_primary_blue_text_style" style="font-size: 12px;" @click="readMoreClick">{{ isReadMore ? 'Read less':'Read more' }}</label>
        </div>

        <div style="margin-top: 15px;">
            <label class="global_primary_black_text_style">Stats</label>
        </div>

        <div style="margin-top: 10px; background-color: #f4f4f6; border-radius: 5px; padding-top: 10px; padding-bottom: 10px;">
            <div style="margin-left: 15px; margin-right: 15px;">
                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Market Cap</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">$688,3202,34837,3822.60</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Circulating Supply</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">34837,3822.60 DOGE</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Total Supply</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">34837,3822.60 DOGE</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Volume(24h)</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">$3.07B</label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Link -->
         <div style="margin-top: 15px;">
            <label class="global_primary_black_text_style">Links</label>
         </div>

         <div class="content_hleft_vcenter" style="margin-top: 10px;">
            <label class="global_flag_blue_text_style">Official Website</label>
            <label class="global_flag_blue_text_style">Explorer</label>
            <label class="global_flag_blue_text_style">Coinmarketcap</label>
         </div>

         <div class="content_hleft_vcenter" style="margin-top: 10px;">
            <label class="global_flag_blue_text_style">Github</label>
            <label class="global_flag_blue_text_style">Twitter</label>
            <label class="global_flag_blue_text_style">Reddit</label>
            <label class="global_flag_blue_text_style">Whitepaper</label>
         </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import CryptoChartLine from './CryptoChartLine.vue';

export default {
    setup() {
        const isTurnOpenNotification = ref(false)
        const isReadMore = ref(false)

        return {
            isTurnOpenNotification,
            isReadMore,
        }
    },
    components: {
        CryptoChartLine,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        readMoreClick() {
            this.isReadMore = !this.isReadMore
        }
    }
}
</script>

<style>
.global_flag_blue_text_style {
    background-color: #f4f4f6;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 12px;
  font-weight: bolder;
  color: #0400f4;
  margin-right: 7px;
}

.multi-line-label {
  display: -webkit-box; /* 使用 Flexbox 来处理多行文本 */
  -webkit-line-clamp: 100; /* 限制最多显示3行 */
  -webkit-box-orient: vertical; /* 垂直排列 */
  overflow: hidden; /* 超出部分隐藏 */
  line-height: 1.5em; /* 行高，确保文本间隔适当 */
}

.single-line-label {
  display: -webkit-box; /* 使用 Flexbox 来处理多行文本 */
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical; /* 垂直排列 */
  overflow: hidden; /* 超出部分隐藏 */
  line-height: 1.5em; /* 行高，确保文本间隔适当 */
}
</style>