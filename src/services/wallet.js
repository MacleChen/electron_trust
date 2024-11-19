// import * as bip39 from "bip39";
// import * as bip32 from "bip32";
// import * as bitcoin from "bitcoinjs-lib";

export function createBitcoinWallet(mnemonic) {
    console.log(mnemonic)
    // 1. 使用助记词生成种子
    const seed = "bip39.mnemonicToSeedSync(mnemonic)"
  
    // // 2. 使用BIP32生成根节点
    // const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
  
    // // 3. 生成比特币地址（BIP44标准路径：m/44'/0'/0'/0/0）
    // const path = "m/44'/0'/0'/0/0";
    // const keyPair = root.derivePath(path);
  
    // // 4. 获取地址
    // const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  
    return {
        seed,
    //   privateKey: keyPair.toWIF(),
    //   mnemonic,
    };
  }