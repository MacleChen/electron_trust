const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'com.yishuihuayuan.trust', // 替换为您的 App ID
    appPath: `${appOutDir}/${appName}.app`,
    appleId: 'yishuihuayuan@126.com', // Apple 开发者账号
    appleIdPassword: 'Zyl19930121' // 应用密码
  });
};

