<template>
<div style="margin: 15px;">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="rewards_cell_container">
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
        <div class="ended_cell_container">
            <div class="ended_cell_top_container">
                <div style="width: 70%; height: 100%; justify-content: left;text-align: left; padding: 15px; ">
                    <div><label style="font-size: 10px; color: gray;">Ended 3 days ago</label></div>
                    <div><label style="font-size: 14px; font-weight: bold;">
                        Earn WHY with TWT
                    </label></div>
                    <div style="line-height: 12px;"><label style="font-size: 10px;">
                        $WHY is a meme token on BNB Chain with large community. Lock TWT to earn $WHY. More info about $WHY:</label></div>
                    <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;">
                        <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;">https://www.madphant.com</label>
                        <img style="float: right; width: 3px; height: 8px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
                    </div>

                    <div style="display: flex; justify-content: center; align-items: center; width: 100px; height: 26px; background-color: black; border-radius: 5px; margin-top: 15px;">
                        <img style="float: right; width: 15px; height: 15px;" src="../../assets/asserts/gift-1c_Normal@2x.png"/>
                        <label style="font-size: 8px; color: white; margin-left: 4px;">
                            Total:2520B WHY</label>
                    </div>
                </div>

                <div style="width: 30%; height: 100%; display: flex; justify-content: center; align-items: center">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <label style="font-size: 12px; font-weight: bold; color: blue; margin-right: 4px;">View</label>
                        <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>
                </div>
            </div>

            <div class="divider"></div>

            <div class="ended_cell_bottom_container">
                <div class="ended_cell_bottom_cell_container">
                    <div style="margin-left: 10px;">Lock</div>
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                        <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;  width: 45%;">
                            <div style="display: flex; justify-content: center; align-items: center; ">
                                <img src="../../assets/asserts/earn-inactive-light_Normal@2x.png" width="20px" height="20px"/>
                            </div>

                            <div class="ended_cell_bottom_cell_ellipsis" style="margin-left: 10px;">
                                <div  style="display: flex;">
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
                        </div>

                    <div style="width: 5%;">
                        <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>

                    <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px; width: 45%;">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <img src="../../assets/asserts/earn-inactive-light_Normal@2x.png" width="20px" height="20px"/>
                        </div>

                        <div class="ended_cell_bottom_cell_ellipsis" style="margin-left: 10px; ">
                            <div style="display: flex;">
                                <label style="font-size: 12px; font-weight: bold; color: black;">
                                    Rewards tracker
                                </label>
                            </div>
                            <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                                <label style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px; text-overflow: ellipsis; line-clamp: 1; overflow: hidden;white-space: nowrap;">
                                    Track and claim token rewards
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>





      <div class="ended_container" style="margin-top: 15px;">
        <div style="font-size: 14px; color: gray; font-weight: bold; text-align: left;">Ended</div>
        <div class="ended_cell_container">
            <div class="ended_cell_top_container">
                <div style="width: 70%; height: 100%; justify-content: left;text-align: left; padding: 15px; ">
                    <div><label style="font-size: 10px; color: gray;">Ended 3 days ago</label></div>
                    <div><label style="font-size: 14px; font-weight: bold;">
                        Earn WHY with TWT
                    </label></div>
                    <div style="line-height: 12px;"><label style="font-size: 10px;">
                        $WHY is a meme token on BNB Chain with large community. Lock TWT to earn $WHY. More info about $WHY:</label></div>
                    <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;">
                        <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;">https://www.madphant.com</label>
                        <img style="float: right; width: 3px; height: 8px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
                    </div>

                    <div style="display: flex; justify-content: center; align-items: center; width: 100px; height: 26px; background-color: black; border-radius: 5px; margin-top: 15px;">
                        <img style="float: right; width: 15px; height: 15px;" src="../../assets/asserts/gift-1c_Normal@2x.png"/>
                        <label style="font-size: 8px; color: white; margin-left: 4px;">
                            Total:2520B WHY</label>
                    </div>
                </div>

                <div style="width: 30%; height: 100%; display: flex; justify-content: center; align-items: center">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <label style="font-size: 12px; font-weight: bold; color: blue; margin-right: 4px;">View</label>
                        <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>
                </div>
            </div>

            <div class="divider"></div>

            <div class="ended_cell_bottom_container">
                <div class="ended_cell_bottom_cell_container">
                    <div style="margin-left: 10px;">Lock</div>
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                        <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;  width: 45%;">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <img src="../../assets/asserts/earn-inactive-light_Normal@2x.png" width="20px" height="20px"/>
                            </div>

                            <div class="ended_cell_bottom_cell_ellipsis" style="margin-left: 10px;">
                                <div  style="display: flex;">
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
                        </div>

                    <div style="width: 5%;">
                        <img style="float: right; width: 20px; height: 20px;" src="../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>

                    <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px; width: 45%;">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <img src="../../assets/asserts/earn-inactive-light_Normal@2x.png" width="20px" height="20px"/>
                        </div>

                        <div class="ended_cell_bottom_cell_ellipsis" style="margin-left: 10px; ">
                            <div style="display: flex;">
                                <label style="font-size: 12px; font-weight: bold; color: black;">
                                    Rewards tracker
                                </label>
                            </div>
                            <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                                <label style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px; text-overflow: ellipsis; line-clamp: 1; overflow: hidden;white-space: nowrap;">
                                    Track and claim token rewards
                                </label>
                            </div>
                        </div>
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
    };
  },
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
    height: 220px;
    border-radius: 10px;
}

.ended_cell_top_container {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: left;
    align-items: center;
}

.ended_cell_bottom_container {
    width: 100%;
    height: 70px;
}

.ended_cell_bottom_cell_container {
    width: 100%;
    margin-top: 10px;
    text-align: left;
    font-size: 10px;
    color: gray;
}

</style>