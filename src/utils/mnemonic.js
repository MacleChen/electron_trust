// src/utils/mnemonic.js

import * as bip39 from 'bip39';

/**
 * 生成助记词
 * @returns {string} 助记词字符串
 */
export function generateMnemonic() {
  return bip39.generateMnemonic();
}

/**
 * 验证助记词是否有效
 * @param {string} mnemonic 助记词字符串
 * @returns {boolean} 是否有效
 */
export function validateMnemonic(mnemonic) {
  return bip39.validateMnemonic(mnemonic);
}

/**
 * 将助记词转换为种子
 * @param {string} mnemonic 助记词字符串
 * @returns {Buffer} 种子 Buffer
 */
export function mnemonicToSeed(mnemonic) {
  return bip39.mnemonicToSeedSync(mnemonic);
}
