const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          isCustomElement: (tag) => tag === 'webview', // 这里是你配置的逻辑
        },
      });
  },
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        // 如有其他 Node.js 模块需求，也可以在这里添加
      },
    },
  },
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      builderOptions: {
        'productName': 'Trust',//生成exe的名字
        "appId": "com.yishuihuayuan.trust",//包名  
        "copyright": "2024 copy right.",//版权信息
        "directories": { // 输出文件夹
          "output": "electron_output",
        },
        "nsis": {
          "oneClick": false, // 是否一键安装
          "allowElevation": true, // 允许请求提升。若为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, //是否允许修改安装目录
          "installerIcon": "./public/app.ico",// 安装时图标
          "uninstallerIcon": "./public/app.ico",//卸载时图标
          "installerHeaderIcon": "./public/app.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 是否创建桌面图标
          "createStartMenuShortcut": true,// 是否创建开始菜单图标
          "shortcutName": "Trust", // 快捷方式名称
          "runAfterFinish": false,//是否安装完成后运行
        },
        "win": {
          "icon": "public/app.ico",//图标路径
          "target": [
            {
              "target": "nsis", //利用nsis制作安装程序
              "arch": [
                "x64", //64位
              ]
            }
          ]
        },
        "dmg": {
          sign: true, // 确保 dmg 也被签名
          "contents": [
            {
              "x": 410,
              "y": 150,
              "type": "link",
              "path": "/Applications"
            },
            {
              "x": 130,
              "y": 150,
              "type": "file"
            }
          ]
        },
        "mac": {
          "category": "com.yishuihuayuan.trust",
          "identity": "com.yishuihuayuan.trust",
          "hardenedRuntime": true,
          "gatekeeperAssess": false,
          "darkModeSupport": true,
          "icon": "public/app.png",//图标路径
          "target": [
            {
              "target": "dmg", //利用dmg制作安装程序
              "arch": [
                "arm64",    //m芯片
                "x64",    // intel芯片
              ]
            }
          ]
        },
        // afterSign: async (context) => {
        //   const { notarize } = require("electron-notarize");
        //   await notarize({
        //     appBundleId: "com.yishuihuayuan.trust", // 替换为您的应用 ID
        //     appPath: `${context.appOutDir}/Trust.app`,
        //     appleId: "yishuihuayuan@126.com", // 替换为您的 Apple ID
        //     appleIdPassword: "euvl-ebze-ndhe-aczz", // 替换为应用专用密码
        //   });
        // },
      },
      externals: ['clipboard'],     // 解决白页问题，或找不到clipboard
      nodeIntegration: true
    },
  }
})
