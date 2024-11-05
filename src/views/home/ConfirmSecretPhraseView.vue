<template>
    <van-nav-bar title="Confirm secret phrase" @click-left="navBarLeftClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 20px;">
        <div style="text-align: left">
            <label style="font-size: 12px; color: #868d9a;">
                Please tap on the correct answer of the below seed phrases.</label>
        </div>

        <!-- one -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #2</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="item in oneWordsArray" :key="item">
                <div class="content_hcenter_vcenter" style="background-color: #dbdce4; border-radius: 5px; width: 100%; height: 30px;">
                    <label style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <!-- two -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #5</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="item in twoWordsArray" :key="item">
                <div class="content_hcenter_vcenter" style="background-color: #dbdce4; border-radius: 5px; width: 100%; height: 30px;">
                    <label style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>


        <!-- three -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #4</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="item in threeWordsArray" :key="item">
                <div class="content_hcenter_vcenter" style="background-color: #dbdce4; border-radius: 5px; width: 100%; height: 30px;">
                    <label style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <!-- four -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #10</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="item in fourWordsArray" :key="item">
                <div class="content_hcenter_vcenter" style="background-color: #dbdce4; border-radius: 5px; width: 100%; height: 30px;">
                    <label style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <div class="content_hcenter_vcenter" @click="confirmContinueClick"
        style="background-color: blue; width: 100%; height: 50px; border-radius: 25px; color: white; font-size: 14px; font-weight: bold; margin-top: 350px;">
            Confirm
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const oneWordsArray = ref(["words", "good", "hello"])
        const twoWordsArray = ref(["sunny", "name", "pathway"])
        const threeWordsArray = ref(["what", "your", "myself"])
        const fourWordsArray = ref(["smail", "cry", "after"])

        return {
            oneWordsArray,
            twoWordsArray,
            threeWordsArray,
            fourWordsArray,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        confirmContinueClick() {
            this.$router.push({name: "home"})
        }
    }
}
</script>