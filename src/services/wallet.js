const bip39 = require("bip39");
// const bip32 = require('bip32');
// const dogecoin = require('dogecoinjs-lib');
const bitcoin = require('bitcoinjs-lib');
const hdkey = require('ethereumjs-wallet').hdkey
const util = require('ethereumjs-util')
import Web3 from "web3";
const solanaWeb3 = require('@solana/web3.js');
// const ethers = require('ethers');
import { ethers } from 'ethers';
import { Buffer } from 'buffer';

// 确保 Buffer 在浏览器中可用
global.Buffer = Buffer;

// Dogecoin 网络配置
const dogecoinNetwork = {
  messagePrefix: '\x18Dogecoin Signed Message:\n',
  bip32: {
    public: 0x02fac398,
    private: 0x02fac398
  },
  pubKeyHash: 0x1e, // Dogecoin的公钥哈希前缀
  scriptHash: 0x16, // Dogecoin的脚本哈希前缀
  wif: 0x9e // WIF格式私钥前缀
};

export function createBitcoinWallet(mnemonic, walletName = 'Main Wallet') {
  // 1.生成助记词
//   let mnemonic = bip39.generateMnemonic()

  //传入助记词  即可助记词生成	私钥&地址
  //mnemonic = "reward nation sense clinic catch region vocal perfect turtle heavy among picnic"
  //2.将助记词转成seed
  let seed = bip39.mnemonicToSeedSync(mnemonic)

  // //3.通过hdkey将seed生成HD Wallet
  let hdWallet = hdkey.fromMasterSeed(seed);

  //4.生成钱包中在 m/44'/60'/0'/0/0 路径的keypair
  let key = hdWallet.derivePath("m/44'/60'/0'/0/0")
  
  //5.从keypair中获取私钥
  let privateKey = util.bufferToHex(key._hdkey._privateKey);
  
  //6.从keypair中获取公钥
  // console.log("公钥：" + util.bufferToHex(key._hdkey._publicKey))
  
  //7.使用keypair中的公钥生成地址
  let address = util.pubToAddress(key._hdkey._publicKey, true)
  
  console.log("地址：" + address.toString('hex'),"\n")
  address = util.toChecksumAddress('0x' + address.toString('hex'))
      // console.log("地址：" + address,"\n")
  // console.log("地址：" + address,"\n")

  return {
    walletName,
    address,
    privateKey,
    mnemonic,
  };
}

// 生成Btc钱包
export function createBTCWalletFromRoot(root) {
  const btcPath = "m/44'/0'/0'/0";
  const btcNode = root.derivePath(btcPath);
  const btcPrivateKey = btcNode.toWIF();
  const btcAddress = bitcoin.payments.p2pkh({ pubkey: btcNode.publicKey }).address; 

  return {
    address: btcAddress,
    privateKey: btcPrivateKey,
  };
}

// 生成doge钱包
export function createDogecoinWalletFromRoot(root) {
  const dogePath = "m/44'/3'/0'/0";
  const dogeNode = root.derivePath(dogePath);
  const dogePrivateKey = dogeNode.toWIF();

  // 使用 bitcoinjs-lib 来生成 Dogecoin 地址
  const dogeAddress = bitcoin.payments.p2pkh({ pubkey: dogeNode.publicKey, network: dogecoinNetwork }).address;

  return {
    address: dogeAddress,
    privateKey: dogePrivateKey,
  };
}

// 生成ETH钱包
export function createETHWalletFromRoot(mnemonic) {
  const wallet = ethers.Wallet.fromPhrase(mnemonic);

  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

// 生成BNB钱包
export function createBNBWalletFromRoot(root) {
  const ethPath = "m/44'/60'/0'/0";
  const ethNode = root.derivePath(ethPath);
  const ethPrivateKey = ethNode.privateKey.toString('hex');
  const ethWallet = new ethers.Wallet(ethPrivateKey);
  const bnbPrivateKey = ethPrivateKey; // BNB 与 ETH 地址相同
  return {
    address: ethWallet.address,
    privateKey: bnbPrivateKey,
  };
}

// 生成SOL钱包
export function createSOLWalletFromRoot(root) {
  const solPath = "m/44'/501'/0'/0";
  const solNode = root.derivePath(solPath);
  if (!solNode.privateKey || solNode.privateKey.length < 32) {
    throw new Error('Invalid private key length for Solana.');
  }
  const solanaKeypair = solanaWeb3.Keypair.fromSeed(solNode.privateKey.slice(0, 32));
  const solanaPrivateKey = solanaKeypair.secretKey.toString('hex');
  const solanaAddress = solanaKeypair.publicKey.toBase58();

  return {
    address: solanaAddress,
    privateKey: solanaPrivateKey,
  };
}


export async function initWeb3Account() {
    if (window.ethereum) {
      this.provider = window.ethereum;
      try {
        await window.ethereum.enable();
      } catch (error) {
        //   console.log("User denied account access");
      }
    } else if (window.web3) {
      this.provider = window.web3.currentProvider;
    } else {
      this.provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    }
    this.web3 = new Web3(this.provider);
    this.web3.eth.getAccounts().then(accs  => {
      this.account = accs[0]
    })
  }

  export function getMyWeb3() {
    return new Web3('https://mainnet.infura.io/v3/893806ce0c7945139b09b7516788b9c5');
  }

  // 根据公链或网络名称获取图标全路径
  export function getChainIconImagePath(chainName) {
    var newChainName = chainName.toLowerCase().replace(' ', '')
    newChainName = newChainName.replace("_", '')
    var universalName = newChainName + '/info/logo.png'

    console.log("icon: " + universalName)
    try {
        return require('@/assets/blockchains/' + universalName)
    } catch (error) {
        return null
    }
  }

   // 根据公链或网络名称获取图标全路径
   export function getCoinIconImagePath(chainName, contractAddress) {
    var universalName = '@/assets/blockchains/' + chainName.toLowerCase().replace(' ', '') + '/assets/' + contractAddress + '/logo.png'
    return universalName
  }