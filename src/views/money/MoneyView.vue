<template>
    <div class="iframe-container">
    <iframe
      :src="url"
      frameborder="0"
      width="100%"
      height="100%"
      style="border: none;">
    </iframe>
  </div>
</template>

<script>

export default {
    data() {
    return {
      url: 'https://www.baidu.com' // 你想要嵌入的网页URL
    };
  }
};
</script>

<style>
.iframe-container {
  width: 100%; /* 根据需要设置宽度 */
  height: 844px; /* 根据需要设置高度 */
  /* 其他样式 */
}
</style>