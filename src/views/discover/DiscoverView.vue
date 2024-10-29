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

  <van-search
  v-model="value"
  shape="round"
  background="#fff"
  placeholder="Search or enter dApp URL"
/>


<van-swipe class="my-swipe" :loop="false" :width="300" :show-indicators="false">
  <van-swipe-item @click="launchPoolCardClick">
    <div class="discover_scroll_top_content">
      <DiscoverTopScrollCard />
    </div>
  </van-swipe-item>
  <van-swipe-item @click="inAppQuestEarnCardClick">
    <div class="discover_scroll_top_content" style="margin-right: 10px;">
      <DiscoverTopScrollCard />
    </div>
  </van-swipe-item>
</van-swipe>


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
import { ref } from 'vue';
import { showToast } from 'vant';
import DiscoverTopScrollCard from './widgets/DiscoverTopScrollCard.vue';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
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
    };
  },
  components: {
    DiscoverTopScrollCard,
  },
  methods: {
    navBarTabsClick() {
      this.$router.push({ name: 'discoverTabs' });
    },
    navBarActionSheetClick() {
      this.$show.value = true
    },
    launchPoolCardClick() {
      showToast('launchPoolCardClick');
    },
    inAppQuestEarnCardClick() {
      showToast('inAppQuestEarnCardClick');
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

</style>