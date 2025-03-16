import { createDogecoinWalletFromRoot, 
  createBTCWalletFromRoot, 
  createETHWalletFromRoot, 
  createBNBWalletFromRoot, 
  createSOLWalletFromRoot  
} from './wallet.js';
const bip39 = require("bip39");
const bip32 = require('bip32');

export class MultiWalletManager {
  constructor() {
    this.mnemonic = null;
    this.wallets = {
      DOGE: null,
      BTC: null,
      ETH: null,
      BNB: null,
      SOL: null,
    };
  }

  // 生成助记词并创建所有钱包
  createWallets(mnemonic) {
    this.mnemonic = mnemonic;

    // 通过助记词生成种子
    const seed = bip39.mnemonicToSeedSync(mnemonic);
  
    // 创建比特币 HD 钱包，使用 BIP44 的 Dogecoin 路径
    const root = bip32.fromSeed(seed);

    // 创建各币种钱包
    this.wallets.DOGE = createDogecoinWalletFromRoot(root);
    this.wallets.BTC = createBTCWalletFromRoot(root);
    this.wallets.ETH = createETHWalletFromRoot(mnemonic);
    this.wallets.BNB = createBNBWalletFromRoot(root);
    this.wallets.SOL = createSOLWalletFromRoot(root);
  }

  getWallets() {
    return { mnemonic: this.mnemonic, wallets: this.wallets };
  }
}