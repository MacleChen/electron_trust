// const Store = require('electron-store');
const Store = require('electron-store');
import CryptoJS from 'crypto-js';
const secureKeyStr = 'iifhwXIheei8*6392663;/.kku1rjfhIKHhfe';

// 生成一个安全的 `electron-store` 实例（推荐加密）
const store = new Store({
  encryptionKey: secureKeyStr // 这里的密钥应存储在安全位置
});

// 打乱数组顺序，并返回新的数组
export function shuffleArray(originArray) {
  // 使用Fisher-Yates算法来打乱数组
  let array = originArray.slice();
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// 千分分隔符展示
export function formatNumber(number) {
  return number.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// 存储用户信息
export function saveUserData(userInfo) {
  // localStorage.setItem('userData', JSON.stringify(userInfo))
  store.set('userData', CryptoJS.AES.encrypt(JSON.stringify(userInfo), secureKeyStr).toString());
}

// 读取用户信息
export function getUserData() {
  const userStr = store.get('userData');
  if (!userStr) return null;
  const deUserStr = CryptoJS.AES.decrypt(userStr, secureKeyStr).toString(CryptoJS.enc.Utf8)
  return JSON.parse(deUserStr)
  // return JSON.parse(localStorage.getItem('userData'))
}

export function clearStoreInfo() {
  store.clear(); // 清空所有存储的数据
}

// 本地存储字典
export function localStorageSetDict(key, dictInfo) {
  localStorage.setItem(key, JSON.stringify(dictInfo))
}

// 获取本地存储的字典
export function getLocalStorageDict(key) {
  return JSON.parse(localStorage.getItem(key))
}
