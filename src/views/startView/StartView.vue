<template>
    <!-- <van-button type="primary" to="/tabbar">主要按钮</van-button> -->
    <div class="startView" v-if="tabbar == 0">
      <img @dragstart.prevent alt="Vue logo" src="../../assets/asserts/icon_dark_Normal@2x.png" width="130">
    </div>
    <div v-if="tabbar == 1">
      <TabBarView />
    </div>

  </template>

<script>
  import { Button } from 'vant';
  import TabBarView from '../TabBarView.vue';

export default {
  data() {
    return {
      tabbar: 0
    };
  },
  created() {
    setTimeout(() => {
        //this.$router.push({ name: 'tabbar' });
        this.tabbar = 1;
      }, 3000); // 延时3秒
  },
  name: 'StartView',
  components: {
            [Button.name]: Button,
            TabBarView,
        },
  methods: {
    goToAnotherPage() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style>
.startView {
  display: flex;        /* 使用Flexbox布局 */
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;          /* 容器高度设置为视口高度，也可以根据需要设置 */
}
</style>