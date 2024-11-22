const bip39 = require("bip39");
const hdkey = require('ethereumjs-wallet').hdkey
const util = require('ethereumjs-util')
import Web3 from "web3";

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