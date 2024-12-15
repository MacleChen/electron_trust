<template>
    <van-nav-bar :title="$t('Discover')" :border="false" :safe-area-inset-top="false" :fixed="true" :placeholder="true">
    <template #right>
      <div style="display: flex; justify-content: center; align-items: center;">
        <div @click="navBarTabsClick"
        style="border: 1px solid blue; border-radius: 3px; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; margin-right: 15px;">
          <label style="color: blue;">3</label>
        </div>
        <img @click="show = true" @dragstart.prevent src="../../assets/asserts/menu-dots-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
      </div>
    </template>
  </van-nav-bar>

  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

  <van-search
  v-model="value"
  shape="round"
  background="#fff"
  placeholder="Search or enter dApp URL"
/>


<van-swipe class="my-swipe" :loop="false" :width="300" :show-indicators="false">
  <van-swipe-item v-for="(item, index) in topScrollData" :key="item.title" @click="topScrollCardCellClick(item)">
    <div class="discover_scroll_top_content" :style="{marginRight: index == topScrollData.length - 1 ? '10px': '0px'}">
      <DiscoverTopScrollCard :scrollData="JSON.stringify(item)"/>
    </div>
  </van-swipe-item>
</van-swipe>

<div v-if="isHasPhrase">
  <DappHeaderView header-title="Latest" @click="latestListHeaderClick" />
  <LatestListContent @valueChanged="latestCellValueChange" :isLimitShow="true"/>
</div>

<DappHeaderView header-title="Discover dApp" />
<DappContentView @valueChanged="dappHandleValueChange"/>

<DappHeaderView header-title="Top dApp tokens" @click="topdAppTokenHeaderClick" />

<van-swipe class="my-swipe" :loop="false" :width="300" :show-indicators="false">
  <van-swipe-item  v-for="(item, index) in showBottomScrollData" :key="item.title" @click="bottomScrollCardCellClick(item)">
    <div class="discover_scroll_bottom_content"  :style="{marginRight: index == showBottomScrollData.length - 1 ? '10px': '0px'}">
      <DiscoverBottomScrollToken :scrollData="JSON.stringify(item)"/>
    </div>
  </van-swipe-item>
</van-swipe>

<DiscoverFeedback />

</van-pull-refresh>
<!-- ActionSheet -->
  <van-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="Cancel"
  close-on-click-action
  @cancel="onCancel"
  @select="onSelect"
/>
</template>

<script>
import { ref, inject, watch } from 'vue';
import { showToast } from 'vant';
import { useRequest } from 'vue-hooks-plus';
import { formatNumber } from '@/utils/utils';
import DiscoverTopScrollCard from './widgets/DiscoverTopScrollCard.vue';
import DappHeaderView from './widgets/DappHeaderView.vue';
import DappContentView from './widgets/DappContentView.vue';
import DiscoverBottomScrollToken from './widgets/DiscoverBottomScrollToken.vue';
import DiscoverFeedback from './widgets/DiscoverFeedback.vue';
import LatestListContent from './Latest/LatestListContent.vue';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const refreshing = ref(false);

    const globalVars = inject("globalVars")
    const isHasPhrase = globalVars.secretPhraseStr == null ? ref(false) : ref(globalVars.secretPhraseStr.split(' ').length == 12)

    const topScrollData = ref([
      {title: 'Launchpool', subTitle: 'Launchpool: Lock TWT to earn rewards.', imageStr: require('../../assets/asserts/launchpool _ lm_Normal@2x.png'), flag: 'Token rewards', link: 'launchpool'},
      {title: 'In-app quest', subTitle: 'Earn Trust Points and unlock future rewards', imageStr: require('../../assets/asserts/tw-savings-light_Normal@2x.png'), flag: 'Up to 210 Trust Points daily', link: 'launchpool'},
    ])

    const bottomScrollData = ref([])
    const showBottomScrollData = ref([])

    // 请求币的市场列表
    var { data } = useRequest(() => {
        return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1').then(res => res.json());
    })
    watch(data, (newValue) => {
        for(var i = 0; i < newValue.length; i++) {
            const symbolData = newValue[i]
            const newSymbolData = {title: symbolData.symbol.toUpperCase(), subtitle: symbolData.name, 
            totalMoney: formatNumber(parseFloat(symbolData.current_price).toFixed(2)), 
            percent: parseFloat(symbolData.price_change_percentage_24h).toFixed(2),
            imgStr: symbolData.image}
            bottomScrollData.value.push(newSymbolData)
            if (i < 3) {
              showBottomScrollData.value.push(newSymbolData)
            }
        }
    })


    const onRefresh = () => {
      setTimeout(() => {
        // showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };

    const show = ref(false);
    const actions = [
      { name: 'History' },
      { name: 'Favorite' },
    ];

    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show.value = false;
      showToast(item.name);
    };

    const onCancel = () => showToast('取消');
    return {
      count,
      loading,
      onRefresh,
      show,
      actions,
      onCancel,
      onSelect,
      refreshing,
      globalVars,
      topScrollData,
      bottomScrollData,
      showBottomScrollData,
      isHasPhrase,
    };
  },
  components: {
    DiscoverTopScrollCard,
    DappHeaderView,
    DappContentView,
    DiscoverBottomScrollToken,
    DiscoverFeedback,
    LatestListContent,
  },
  methods: {
    navBarTabsClick() {
      this.$router.push({ name: 'discoverTabs' });
    },
    navBarActionSheetClick() {
      this.$show.value = true
    },
    topScrollCardCellClick(item) {
      if (this.isHasPhrase == false) {
        this.globalVars.isShowCreateImportWalletAlert = true;
        return
      }

      if (item.title == 'Launchpool') {
        this.$router.push({name: 'launchPoolListView'})
      } else {
        console.log(item.subTitle)
      }
    },
   bottomScrollCardCellClick(item) {
      this.$router.push({name: 'cryptoDetailView', query: { dataItem: JSON.stringify(item)}})
    },
    dappHandleValueChange(section, rowIndex) {
      console.log("" + section + '-' + rowIndex)
      this.$router.push({ name: 'dappWebView', query: { requestURL: 'https://sunpump.meme/?utm_source=Trust_iOS_Browser' } })
    },
    topdAppTokenHeaderClick() {
      this.$router.push({name: 'topdAppTokenListView', query: { dataList: JSON.stringify(this.bottomScrollData) }})
    },
    latestListHeaderClick() {
      this.$router.push({name: 'latestListView'})
    },
    latestCellValueChange(item) {
      this.$router.push({ name: 'dappWebView', query: { requestURL: item.link } })
    }
      
  }
}

</script>

<style>
.discover_cell_container {
  width: 100%;
  height: 100px;
  background-color: red;
}

.discover_more_cell_container {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: beige;
}

.discover_scroll_top_content {
  margin-top: 10px;
  margin-left: 10px;
  height: 100px; 
  background-color: #f4f4f6; 
  border-radius: 10px;
}

.discover_scroll_bottom_content {
  margin-top: 10px;
  margin-left: 10px;
  height: 80px; 
  background-color: #f4f4f6; 
  border-radius: 10px;
}

</style>