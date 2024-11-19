// preload.js

// const { contextBridge, ipcRenderer } = require('electron');
import { contextBridge, ipcRenderer } from 'electron';

// 暴露需要的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  generateMnemonic: () => ipcRenderer.invoke('generate-mnemonic'),  // 用 ipcRenderer 调用主进程的功能
});
