const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 插件配置
  pluginOptions: {
    electronBuilder: {
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
                //"x64",    // inter芯片
              ]
            }
          ]
        }
      },
      nodeIntegration: true
    },
  }
})
