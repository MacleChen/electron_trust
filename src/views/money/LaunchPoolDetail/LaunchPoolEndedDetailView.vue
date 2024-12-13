<template>
    <van-nav-bar :title="'Launchpool:' + poolData.symbol" @click-left="navBarLeftClick" @click-right="navBarRightClick" :fixed="true" :border="false">
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <img src="../../../assets/asserts/circled-info-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-top: 50px; margin-left: 15px; margin-right: 15px;">
        <div style="height: 100%; justify-content: left;text-align: left;">
            <div><label style="font-size: 10px; color: gray;">{{ poolData.createTime }}</label></div>
            <div><label style="font-size: 14px; font-weight: bold;">
                {{ poolData.title }}
            </label></div>
            <div style="line-height: 12px;"><label style="font-size: 10px;">
                {{ poolData.subTitle }}</label></div>
            <div style="display: flex; justify-content: left; align-items: center; margin-top: 5px;">
                <label style="font-size: 10px; font-weight: bold; color: blue; margin-right: 4px;" 
                @click="endedCellLink(poolData.link)">{{ poolData.link }}</label>
                <img style="float: right; width: 3px; height: 8px;" src="../../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>

            <div class="content_hleft_vcenter" style="height: 22px; background-color: black; border-radius: 5px; margin-top: 10px; width: fit-content; padding-left: 5px; padding-right: 5px;">
                <img style="float: right; width: 15px; height: 15px;" src="../../../assets/asserts/gift-1c_Normal_white2@2x.png"/>
                <label style="font-size: 8px; color: white; margin-left: 4px;">
                    Total:{{ poolData.giftValue }}</label>
            </div>
        </div>

        <div class="golbal_warning_tip_frame_style content_hleft_vcenter" style="margin-top: 15px; text-align: left; height: 60px;">
            <div class="content_hright_vtop" style="width: 7%; height: 75%; padding-right: 5px;">
                <img style="width: 13px; height: 13px;" src="../../../assets/asserts/circled-info-f_Normal_gold@2x.png"/>
            </div>

            <div style="width: 90%;">
                <div style="line-height: 15px;">
                    <label class="global_tip_gold_text_style" style="color: black;">Launchpool - lock your existing tokens to earn rewards from new and upcoming projects.</label>
                </div>
                <div class="content_hleft_vcenter">
                    <label class="global_primary_blue_text_style" style="font-size: 12px;">Learn more</label>
                    <img style="width: 15px; height: 15px;" src="../../../assets/asserts/chevron-right-f-24_Normal_blue@2x.png"/>
                </div>
            </div>
        </div>

        <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

        <div style="text-align: left">
            <div v-for="(lock, index) in poolData.Locks" :key="lock.title"
            style="background-color: #f4f4f6; border-radius: 15px; margin-top: 10px; padding-top: 8px; padding-bottom: 10px;">
            <div class="content_hleft_vcenter">
                <div class="global_desciption_text_style" style="margin-left: 10px; width: 50%;" >Lock</div>
                <div class="global_desciption_text_style" style="margin-left: 10px; width: 50%;" >Earn</div>
            </div>
                <div class="content_hleft_vcenter" style="width: 100%;">
                    <div class="content_hleft_vcenter" style="margin-top: 0px;  width: 45%;">
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
                        <img style="float: right; width: 20px; height: 20px;" src="../../../assets/asserts/arrow-right-f_Normal@2x.png"/>
                    </div>

                    <div class="content_hleft_vcenter" style="margin-top: 0px;  width: 45%;">
                        <div class="content_hcenter_vcenter" style="width: 20%;">
                            <img :src="poolData.earns[index].imageCryptoStr" width="24px" height="24px" style="border-radius: 12px;"/>
                            <img :src="poolData.earns[index].imageChainStr" width="10px" height="10px" style="margin-left: -10px; margin-top: 10px;"/>
                        </div>

                        <div class="ended_cell_bottom_cell_ellipsis" style="width: 80%;">
                            <div  style="display: flex;">
                                <label class="wors_last_ellipsis_three_points" style="font-size: 12px; font-weight: bold; color: black;">
                                    {{ poolData.earns[index].title }}
                                </label>
                            </div>
                            <div style="display: flex; justify-content: left; margin-top: 4px; align-items: center;">
                                <label class="wors_last_ellipsis_three_points" style="font-size: 10px; font-weight: bold; color: gray; margin-right: 4px;">
                                    {{ poolData.earns[index].subTitle }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="global_flag_gray_text_style" v-if="poolData.pools.length > 0" style="width: fit-content; margin-left: 10px; margin-top: 5px;">
                    {{ poolData.pools[index].title }}:{{ poolData.pools[index].percent + " " }}{{ poolData.pools[index].unit }}
                </div>

                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="margin-left: 15px; margin-right: 15px;">
                    <div class="content_hleft_vcenter global_primary_black_small_text_style">
                        <div style="width: 50%;">
                            <label>Total pool rewards</label>
                        </div>
                        <div style="width: 50%; text-align: right;">
                            <label>{{ formatNumber(parseFloat(lock.total).toFixed(2)) + " " + poolData.symbol }} </label>
                        </div>
                    </div>

                    <div class="content_hleft_vcenter global_primary_black_small_text_style">
                        <div style="width: 50%;">
                            <label>Lock period</label>
                        </div>
                        <div style="width: 50%; text-align: right;">
                            <label>{{ lock.lockPeriod }} </label>
                        </div>
                    </div>
                </div>

                <div class="divider" style="margin-left: 0px; margin-right: 0px;"></div>

                <div style="margin-left: 15px; margin-right: 15px;">
                    <div class="content_hleft_vcenter">
                        <div class="content_hleft_vcenter" style="width: 50%;">
                            <img style="width: 15px; height: 15px;" src="../../../assets/asserts/lock-close-f_Normal@2x.png"/>
                            <label class="global_primary_gray_text_style" style="font-size: 12px; margin-left: 5px;">{{ formatNumber(parseFloat(lock.lockValue).toFixed(2)) }}&nbsp;</label>
                            <label class="global_primary_gray_text_style">{{lock.lockSymbol }}</label>
                        </div>

                        <div class="content_hright_vcenter" style="width: 50%;">
                            <label class="global_primary_gray_text_style">Unlock</label>
                            <label class="global_primary_black_text_style" style="background-color: #dcdce4; color: white; border-radius: 3px; padding: 7px 10px 7px 10px; margin-left: 10px"
                            >Lock {{ lock.lockSymbol }}</label>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="content_hleft_vcenter" style="margin-top: 20px;">
                <img style="width: 12px; height: 12px;" src="../../../assets/asserts/launchpool_detail_bottom_book.png"/>
                <label class="global_primary_gray_text_style" style="font-size: 12px; margin-left: 5px;">T&Cs</label>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { formatNumber } from '@/utils/utils';
export default {
    setup() {
        const route = useRoute()
        let poolData = ref(JSON.parse(route.query.item))

        return {
            poolData,
            formatNumber,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        navBarRightClick() {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://trustwallet.com/blog/trust-wallet-launchpool' } })
        }
    }
}
</script>