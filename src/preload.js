const { contextBridge } = require('electron');
const bip39 = require('bip39');

contextBridge.exposeInMainWorld('bip39API', {
  generateMnemonic: () => bip39.generateMnemonic(),
  validateMnemonic: (mnemonic) => bip39.validateMnemonic(mnemonic),
  mnemonicToSeed: (mnemonic) => bip39.mnemonicToSeed(mnemonic),
});