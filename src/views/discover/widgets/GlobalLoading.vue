<template>
    <div id="lottie_box" class="global_loading">
        <!-- <van-loading type="spinner" color="#1989fa"/> -->
    </div>
</template>

<script>
import Lottie from 'lottie-web';
export default {
    mounted() {
        Lottie.loadAnimation({
            container: document.getElementById('lottie_box'),
            renderer: 'svg',
            loop: true,
            path: './loading1730548374976.json'  //'global_offical_loading.json'
        })
    },
    methods: {
    }
}
</script>

<style>
.global_loading {
    z-index: 999;
    display: flex; /* 使用Flexbox布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  position: absolute; /* 设置绝对定位 */
  top: 50%; /* 距离容器顶部50% */
  left: 50%; /* 距离容器左侧50% */
  transform: translate(-50%, -50%); /* 使用transform进行微调 */
  width: 100px; /* div的宽度 */
  height: 100px; /* div的高度 */
  /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>