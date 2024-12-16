<template>
    <div>
      <webview
        ref="myWebview"
        src="https://www.baidu.com"
        style="width:100%; height:100%; display: inline-flex;"
        @dom-ready="onWebviewReady"
      ></webview>
      <button @click="captureScreenshot">截取屏幕并保存为图片</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { ipcRenderer } from 'electron';
  
  const myWebview = ref(null);
  onMounted(() => {
    console.log('Webview component:', myWebview.value);
});
  
  const onWebviewReady = () => {
    console.log('Webview is ready');
  };
  
  // 触发截图操作
  const captureScreenshot = () => {
    if (myWebview.value) {
      // 调用 Electron 主进程进行截图并保存
      ipcRenderer.send('capture-webview-screenshot');
    }
  };

  ipcRenderer.on('screenshot-saved', (event, filePath) => {
    console.log('截图保存成功，文件路径:', filePath);
    });

    ipcRenderer.on('screenshot-failed', (event, error) => {
    console.error('截图保存失败:', error);
    });
  </script>
  