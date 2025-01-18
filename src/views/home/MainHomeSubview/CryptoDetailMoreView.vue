<template>
    <van-nav-bar title="Stake INJ" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #title>
            <div>
                <div>
                    <label class="global_primary_black_text_style">{{ cryptoData.title }}</label>
                </div>

                <div style="margin-top: -5px;">
                    <label class="global_desciption_text_style">COIN</label>
                    <van-divider vertical />
                    <label class="global_desciption_text_style">{{ cyptoDetail.name }}</label>
                </div>
            </div>
        </template>
    </van-nav-bar>
     
    <div style="margin-top: 60px; margin-left: 15px; margin-right: 15px; text-align: left;">
        <div class="content_hleft_vcenter" >
            <img :src="cryptoData.imgStr" width="24px" height="24px" style="border: #f4f4f6 solid 1px; border-radius: 13px;"/>
            <label class="global_super_big_primary_black_text_style" style="margin-left: 5px;">{{ cyptoDetail.name }}</label>
        </div>

        <div style="margin-top: 1px;">
            <label class="global_desciption_text_style" style="font-weight: bold;">${{ cryptoData.leftAllMoney }}</label>
            <label class="global_desciption_text_style" style="font-weight: bold; margin-left: 5px;" :style="{color: cryptoData.percent > 0 ? '#5eba89':'red'}">
                {{ cryptoData.percent > 0 ? '+':'' }}{{ cryptoData.percent }}%</label>
        </div>

        <div style="width: 100%; height: 280px;">
            <CryptoChartLine :cryptoData="JSON.stringify(cryptoData)"/>
        </div>

        <div>
            <label class="global_primary_black_text_style">About {{ cryptoData.title }}</label>
        </div>
        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style" :class="isReadMore ? 'multi-line-label':'single-line-label'" v-html="cyptoDetail.description.en" @click="handleLinkClick"> 
            </label>
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
                        <label class="global_primary_black_small_text_style">${{ cryptoData.marketCap }}</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Circulating Supply</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">{{ cryptoData.circulatingSupply }} {{ " " + cryptoData.title }}</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Total Supply</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">{{ cryptoData.totalSupply }} {{ " " + cryptoData.title }}</label>
                    </div>
                </div>

                <div class="content_hleft_vcenter" style="height: 30px;">
                    <div style="width: 40%;">
                        <label class="global_desciption_text_style">Volume(24h)</label>
                    </div>
                    <div style="width: 60%; text-align: right;">
                        <label class="global_primary_black_small_text_style">${{ cryptoData.volume24H }}B</label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Link -->
         <div style="margin-top: 15px;">
            <label class="global_primary_black_text_style">Links</label>
         </div>

         <div class="content_hleft_vcenter" style="margin-top: 10px;">
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(0)">Official Website</label>
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(1)">Explorer</label>
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(2)">Coinmarketcap</label>
         </div>

         <div class="content_hleft_vcenter" style="margin-top: 10px; margin-bottom: 15px;">
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(3)">Github</label>
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(4)">X(Twitter)</label>
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(5)">Reddit</label>
            <label class="global_flag_blue_text_style" @click="linkBtnsClick(6)">Whitepaper</label>
         </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import CryptoChartLine from './CryptoChartLine.vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const isTurnOpenNotification = ref(false)
        const isReadMore = ref(false)
        const cryptoData = ref(JSON.parse(useRoute().query.cyptoData))
        const cyptoDetail = ref(JSON.parse(useRoute().query.cyptoDetail))

        return {
            isTurnOpenNotification,
            isReadMore,
            cryptoData,
            cyptoDetail,
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
        },
        handleLinkClick(event) {
            // 检查点击的是否是链接
            const target = event.target;
            if (target.tagName === 'A' && target.href) {
                event.preventDefault(); // 防止默认行为]
                this.$router.push({ name: 'commonWebView', query: { requestURL: target.href } })
            }
        },
        linkBtnsClick(index) {
            var linkUrl = ""
            switch (index) {
                case 0:
                    linkUrl = this.cyptoDetail.links.homepage[0]
                    break;
                case 1:
                    linkUrl = this.cyptoDetail.links.blockchain_site[1]
                    break;
                case 2:
                    linkUrl = this.cyptoDetail.links.official_forum_url[0]
                    break;
                case 3:
                    linkUrl = this.cyptoDetail.links.repos_url.github[0]
                    break;
                case 4:
                    linkUrl = this.cyptoDetail.links.blockchain_site[2]
                    break;
                case 5:
                    linkUrl = this.cyptoDetail.links.subreddit_url
                    break;
                case 6:
                    linkUrl = this.cyptoDetail.links.whitepaper
                    break;
                default:
                    linkUrl = this.cyptoDetail.links.homepage
                    break;
            }

            this.$router.push({ name: 'commonWebView', query: { requestURL: linkUrl } })
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