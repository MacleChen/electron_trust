'use strict'

import { app, protocol, BrowserWindow, ipcMain  } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path');
const fs = require('fs');

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 390,
    height: 844,
    minWidth:390,
    minHeight:844,
    maxWidth:390,
    maxHeight:844,
    frame:false,
    useContentSize: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: false, // 必须启用 contextIsolation
      nodeIntegration: true, // 禁用 Node.js 集成
      // preload: path.join(__dirname, 'preload.js'), // 开发模式下路径
      webSecurity: false,
      webviewTag: true,
      sandbox: false  // 禁用沙盒模式
    },
    icon: './public/app.ico'
  })

  // 监听渲染进程请求生成助记词
  // ipcMain.handle('generate-mnemonic', async () => {
  //   return bip39.generateMnemonic();  // 返回生成的助记词
  // });

  // 隐藏顶部菜单栏
  win.setMenu(null);
  // 当主窗口准备就绪时，关闭检查窗口

  // 设置窗口位置在右上角
  // const screenSize = screen.getPrimaryDisplay().workAreaSize;
  // const winPosition = {
  //   x: screenSize.width - 800, // 窗口的x坐标
  //   y: 0 // 窗口的y坐标
  // };
  // win.setPosition(winPosition.x, winPosition.y);
  //win.setBounds({ x: 100, y: 100, width: 800, height: 600 });
 
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    // win.loadURL('app://./index.html')
    win.webContents.openDevTools()
    // win.loadFile(path.join(__dirname, '', 'bundled', 'index.html'));
    win.loadFile(path.join(__dirname, 'bundled', 'index.html')); // 或者根据实际目录路径调整
  }

  // 接收渲染进程传来的截图保存请求
  ipcMain.handle('save-screenshot', async (event, imageBuffer) => {
    // 获取当前项目的路径
    const projectPath = __dirname; // 获取 Electron 项目根目录路径
    const screenshotsDir = path.join(projectPath, 'screenshots'); // 在项目根目录下创建 'screenshots' 文件夹
    const currentTimestamp = Date.now();
    const screenshotFilePath = path.join(screenshotsDir, currentTimestamp + 'screenshot.png');

    try {
      fs.writeFileSync(screenshotFilePath, imageBuffer); // 保存文件
      return screenshotFilePath; // 返回文件路径
    } catch (err) {
      console.error('保存截图失败:', err);
      throw new Error('保存截图失败');
    }
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}