<template>
<div style="margin: 15px;">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="rewards_cell_container" @click="rewardsTrackerCellClick">
        <div style="display: flex; justify-content: center; align-items: center; width: 30px; height: 30px; background-color: #dbdbf5; border-radius: 15px; margin-left: 10px;">
            <img src="../../assets/asserts/gift-1c_Normal@2x.png" width="15px" height="15px"/>
        </div>

        <div style="margin-left: 10px; ">
            <div style="display: flex;">
                <label style="font-size: 12px; font-weight: bold; color: black;">
                    Rewards tracker
                </label>
            </div>
            <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                <label style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px;">
                    Track and claim token rewards
                </label>
            </div>
        </div>

        <div style="margin-left: auto; margin-right: 20px;">
            <img style="float: right; width: 5px; height: 10px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
        </div>
      </div>

      
      <div class="learn_more_cell_container">
        <div style="margin-left: 15px;">
            <img src="../../assets/asserts/tooltip-f_Normal@2x.png" width="15px" height="15px"/>
        </div>

        <div style="margin-left: 10px; ">
            <div style="display: flex;">
                <label style="font-size: 10px; color: black; text-align: left; line-height: 15px;">
                    Launchpool - lock your existing tokens to earn rewards from new and upcoming projects.
                </label>
            </div>
            <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;">
                    Learn more
                </label>
                <img style="float: right; width: 3px; height: 8px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>
      </div>

      <div class="more_launch_pool_cell_container">
        <div>
            <div>
                <img style="width: 50px; height: 50px;" src="../../assets/asserts/Empty Wallet _ lm_Normal@2x.png"/>
            </div>
            <div>
                <label style="font-size: 10px; font-weight: bold; color: darkgray; margin-right: 4px;">
                    More Launchpool projects coming soon.
                </label>
            </div>
        </div>
      </div>

      <div class="ended_container">
        <div style="font-size: 14px; color: gray; font-weight: bold; text-align: left;">Ended</div>
        <div class="ended_cell_container" v-for="item in endedDataSource" :key="item.title" style="padding-bottom: 10px;">
            <div class="ended_cell_top_container">
                <div style="width: 70%; height: 100%; justify-content: left;text-align: left; padding-left: 10px; padding-top: 5px; ">
                    <div><label style="font-size: 10px; color: gray;">{{ item.createTime }}</label></div>
                    <div><label style="font-size: 14px; font-weight: bold;">
                        {{ item.title }}
                    </label></div>
                    <div style="line-height: 12px;"><label style="font-size: 10px;">
                        {{ item.subTitle }}</label></div>
                    <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;">
                        <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;" 
                        @click="endedCellLink(item.link)">{{ item.link }}</label>
                        <img style="float: right; width: 3px; height: 8px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
                    </div>

                    <div class="content_hleft_vcenter" style="height: 22px; background-color: black; border-radius: 5px; margin-top: 10px; width: fit-content; padding-left: 5px; padding-right: 5px;">
                        <img style="float: right; width: 15px; height: 15px;" src="../../assets/asserts/gift-1c_Normal_white2@2x.png"/>
                        <label style="font-size: 8px; color: white; margin-left: 4px;">
                            Total:{{ item.giftValue }}</label>
                    </div>
                </div>

                <div style="width: 30%; height: 100%; display: flex; justify-content: center; align-items: center">
                    <div style="display: flex; justify-content: center; align-items: center;" @click="endedViewCellClick(item)">
                        <label style="font-size: 12px; font-weight: bold; color: blue; margin-right: 4px;">View</label>
                        <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>
                </div>
            </div>

            <div v-for="(lock, index) in item.Locks" :key="lock.title" style="margin-top: 10px;">
                <div class="dividerLittle"></div>
                <div class="ended_cell_bottom_container">
                    <div class="ended_cell_bottom_cell_container">
                        <div style="margin-left: 10px;">Lock</div>
                        <div class="content_hleft_vcenter" style="width: 100%;">
                            <div class="content_hleft_vcenter" style="margin-top: 5px;  width: 45%;">
                                <div class="content_hcenter_vcenter" style="width: 20%;">
                                    <img :src="lock.imageCryptoStr" width="24px" height="24px" style="border-radius: 12px;"/>
                                    <img :src="lock.imageChainStr" width="10px" height="10px" style="margin-left: -10px; margin-top: 10px;"/>
                                </div>

                                <div class="ended_cell_bottom_cell_ellipsis" style="width: 80%;">
                                    <div  style="display: flex;">
                                        <label class="wors_last_ellipsis_three_points" style="font-size: 12px; font-weight: bold; color: black;">
                                            {{ lock.title }}
                                        </label>
                                    </div>
                                    <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                                        <label class="wors_last_ellipsis_three_points" style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px;">
                                            {{ lock.subTitle }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="content_hcenter_vcenter" style="width: 10%;">
                                <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                            </div>

                            <div class="content_hleft_vcenter" style="margin-top: 5px;  width: 45%;">
                                <div class="content_hcenter_vcenter" style="width: 20%;">
                                    <img :src="item.earns[index].imageCryptoStr" width="24px" height="24px" style="border-radius: 12px;"/>
                                    <img :src="item.earns[index].imageChainStr" width="10px" height="10px" style="margin-left: -10px; margin-top: 10px;"/>
                                </div>

                                <div class="ended_cell_bottom_cell_ellipsis" style="width: 80%;">
                                    <div  style="display: flex;">
                                        <label class="wors_last_ellipsis_three_points" style="font-size: 12px; font-weight: bold; color: black;">
                                            {{ item.earns[index].title }}
                                        </label>
                                    </div>
                                    <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                                        <label class="wors_last_ellipsis_three_points" style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px;">
                                            {{ item.earns[index].subTitle }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="global_flag_gray_text_style" v-if="item.pools.length > 0" style="width: fit-content; margin-left: 10px; margin-top: 5px;">
                            {{ item.pools[index].title }}:{{ item.pools[index].percent + " " }}{{ item.pools[index].unit }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </van-pull-refresh>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);

    const endedDataSource = ref([])
    endedDataSource.value.push({title: "Earn WHY with TWT",
        subTitle: "$WHY is a meme token on BNB Chain with large community. Lock TWT to earn $WHY. More info about $WHY:",
        symbol: 'WHY',
        link: "https://www.madphant.com",
        giftValue: "4200B WHY",
        createTime: "Ended 47 days ago",
        Locks: [{title: "TWT(Trust wall Your Dapp)", subTitle: "on BNB Smart Chain",  
            imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), 
            imageChainStr: require('../../assets/asserts/smartchain_Normal.png'),
            total: 15120000000,
            lockPeriod: "7 days",
            lockValue: 0.00,
            lockSymbol: 'TWT',}, 

            {title: "slisBNB(Staked Your Dapp)", subTitle: "on BNB Smart Chain",  
            imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), 
            imageChainStr: require('../../assets/asserts/smartchain_Normal.png'),
            total: 15120000000,
            lockPeriod: "7 days",
            lockValue: 0.00,
            lockSymbol: 'slisBNB',}
        ],
        earns: [{title: "WHY (why)", subTitle: "on BNB Smart Chain",  imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), imageChainStr: require('../../assets/asserts/smartchain_Normal.png')}, 
            {title: "WHY (why)", subTitle: "on BNB Smart Chain",  imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), imageChainStr: require('../../assets/asserts/smartchain_Normal.png')}
        ],
        pools: [{title: "pool 1", percent: "40%", unit: "rewards"},
            {title: "pool 1", percent: "40%", unit: "rewards"},
        ],
    })

    endedDataSource.value.push({title: "Earn bscSUNDOG with TWT",
        subTitle: "$SUNDOG is a meme token on Tron Chain. Earn $bscSUNDOG on BSC first and get $SUNDOG airdrop on TRON. More info:",
        symbol: 'SUNDOG',
        lockSymbol: 'TWT',
        link: "https://www.sundog.meme",
        giftValue: "14.000002M bascSUNDOG",
        createTime: "Ended 24 days ago",
        Locks: [{title: "TWT(Trust wall You Dapp)", subTitle: "on BNB Smart Chain", 
            imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), 
            imageChainStr: require('../../assets/asserts/smartchain_Normal.png'),
            total: 15120000000,
            lockPeriod: "7 days",
            lockValue: 0.00,
            lockSymbol: 'TWT',}, 
        ],
        earns: [{title: "bscSUNDOG (bscSUNOG)", subTitle: "on BNB Smart Chain", imageCryptoStr: require('../../assets/asserts/kusama_Normal.png'), imageChainStr: require('../../assets/asserts/smartchain_Normal.png')}, 
        ],
        pools: [],
    })

    endedDataSource.value.push({title: "Earn WOD with TWT",
        subTitle: "More info: World of Dypians is an MMORPG on BNB Chain, seamlessly blending Web2 gaming with Web3 to redefine gaming, DeFi, NFTs, and AI.",
        symbol: 'WoD',
        lockSymbol: 'TWT',
        link: "https://www.worldofdypains.com",
        giftValue: "10M WoD",
        createTime: "Ended 4 days ago",
        Locks: [{title: "TWT(Trust wall You Dapp)", subTitle: "on BNB Smart Chain", 
            imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), 
            imageChainStr: require('../../assets/asserts/smartchain_Normal.png'),
            total: 15120000000,
            lockPeriod: "7 days",
            lockValue: 0.00,
            lockSymbol: 'TWT',},
        ],
        earns: [{title: "Wod (world of Your New Dapp)", subTitle: "on BNB Smart Chain", imageCryptoStr: require('../../assets/asserts/trust_icon_Normal@2x_1.png'), imageChainStr: require('../../assets/asserts/smartchain_Normal.png')}
        ],
        pools: [],
    })

    const onRefresh = () => {
      setTimeout(() => {
        // showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return {
      count,
      loading,
      onRefresh,
      endedDataSource,
    };
  },
  methods: {
    rewardsTrackerCellClick() {
        this.$router.push({name : "rewardsTrackerView"})
    },
    endedCellLink(link) {
        this.$router.push({ name: 'commonWebView', query: { requestURL: link } })
    },
    endedViewCellClick(item) {
        console.log(item.title)
        this.$router.push({name: 'launchPoolEndedDetailView', query: { item: JSON.stringify(item)}})
    } 
  }
}
</script>

<style>
.rewards_cell_container {
    background-color: #f4f4f6;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 60px;
    border-radius: 10px;
}

.learn_more_cell_container {
    margin-top: 10px;
    width: 100%;
    height: 60px;
    background-color: #e5e5fc;
    display: flex;
    padding-top: 10px;
    border-radius: 5px;
}

.more_launch_pool_cell_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
}

.ended_container {
    background-color: white;
}

.ended_cell_container {
    margin-top: 10px;
    background-color: #f4f4f6;
    width: 100%;
    border-radius: 10px;
}

.ended_cell_top_container {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
}

.ended_cell_bottom_container {
    width: 100%;
}

.ended_cell_bottom_cell_container {
    width: 100%;
    text-align: left;
    font-size: 10px;
    color: gray;
}

</style>