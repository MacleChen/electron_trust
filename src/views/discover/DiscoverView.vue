<template>
    <van-nav-bar :title="$t('Discover')" :border="false" @click-right="navBarRightClick" :safe-area-inset-top="false" :fixed="true" :placeholder="true">
    <template #right>
      <img @dragstart.prevent src="../../assets/asserts/menu-dots-f_Normal@2x.png" style="height: 24px; width: 24px;"/>
    </template>
  </van-nav-bar>

  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="rewards_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>

      <div class="learn_more_cell_container">

      </div>
    </van-pull-refresh>
</template>

<script>
import { ref } from 'vue';

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
    return {
      count,
      loading,
      onRefresh,
    };
  },
  methods: {
    navBarRightClick() {
      this.$router.push({ name: 'setting' });
    }
  }
}

</script>

<style>
.rewards_cell_container {
  width: 100%;
  height: 100px;
  background-color: red;
}

.learn_more_cell_container {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: beige;
}

</style>