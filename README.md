### 20204-10-25
1. 完成中英文的适配
2. 完成设置列表
3. vant默认不支持mouse事件，需要集成插件




# electron_trust
node 版本 v20.18.0

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 安装教程
https://blog.csdn.net/weixin_47219632/article/details/134958824?spm=1001.2014.3001.5506

### 最新的淘宝源


### 设置npm代理
npm config set registry https://registry.npmmirror.com
或
http.proxy=http://127.0.0.1:7890
https.proxy=https://127.0.0.1:7890

### Vant 常用的移动端控件
https://vant-ui.github.io/vant/#/zh-CN/skeleton


### 常用色值
https://www.cnblogs.com/xuhongfei/p/17304386.html


### Mac 的arm芯片打包遇到的问题
https://www.cnblogs.com/mrkr/p/18098964

### mac中执行 sudo npm install 出现host问题，需执行
sudo npm install -D electron --ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"

### Electron 手动下载安装放置的位置：
https://electron.nodejs.cn/docs/latest/tutorial/installation/

### 修改mac的下载源(~/.npmrc)
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
https-proxy=http://127.0.0.1:7890/
proxy=http://127.0.0.1:7890/
registry=https://registry.npmmirror.com

### 页面植入加载圈
<GlobalLoading v-if="showLoading"/>

### 创建随机助记词
https://github.com/hujiulong/web-bip39

### 对接区块链的接口
https://api.blockchain.com/v3/#authentication
https://www.blockcypher.com/dev/bitcoin/#restful-resources

https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-01-2024

https://tsanghi.com/fin/doc?index=7-1-1
https://developers.binance.com/docs/zh-CN/binance-spot-api-docs/testnet/rest-api/public-api-endpoints

##### 正在使用的API
https://developers.binance.com/docs/zh-CN/binance-spot-api-docs/testnet/rest-api/public-api-endpoints#exchange-information
https://www.oklink.com/docs/zh/#fundamental-blockchain-data-fundamental-get-list-of-supported-public-chains

### 测试用的助记词
phone glow wool speed local shock frequent bring hair sunny fire moon


### 网络请求框架
https://inhiblabcore.github.io/docs/hooks/guide/#%E2%9C%A8-%E7%89%B9%E6%80%A7

### 打包遇到python识别不到的问题  Exit code: ENOENT. spawn /usr/bin/python
which python
sudo vim ./node_modules/dmg-builder/out/dmg.js
搜索： python,的执行路径
替换成which python搜多到的路径

### push 或clone项目拉取或上推出错的问题 fatal: Could not read from remote repository.

