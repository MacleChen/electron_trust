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
                <label style="font-weight: bold">Word #{{ oneWordRandomIndex + 1 }}</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="(item, index) in oneWordsArray" :key="item">
                <div class="content_hcenter_vcenter"  @click="wordsContentClick(0, index)"
                :style="{backgroundColor: oneWordUserSelectedIndex == index ? 'blue' : '#dbdce4'}"
                style="border-radius: 5px; width: 100%; height: 30px;">
                    <label :style="{color: oneWordUserSelectedIndex == index ? 'white' : '#333'}"
                    style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <!-- two -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #{{ twoWordRandomIndex + 1 }}</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="(item, index) in twoWordsArray" :key="item">
                <div class="content_hcenter_vcenter"  @click="wordsContentClick(1, index)"
                :style="{backgroundColor: twoWordUserSelectedIndex == index ? 'blue' : '#dbdce4'}"
                style="border-radius: 5px; width: 100%; height: 30px;">
                    <label :style="{color: twoWordUserSelectedIndex == index ? 'white' : '#333'}"
                    style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>


        <!-- three -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #{{ threeWordRandomIndex + 1 }}</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="(item, index) in threeWordsArray" :key="item">
                <div class="content_hcenter_vcenter"  @click="wordsContentClick(2, index)"
                :style="{backgroundColor: threeWordUserSelectedIndex == index ? 'blue' : '#dbdce4'}"
                style="border-radius: 5px; width: 100%; height: 30px;">
                    <label :style="{color: threeWordUserSelectedIndex == index ? 'white' : '#333'}"
                    style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <!-- four -->
        <div style="margin-top: 20px;">
            <div style="width: 100%; text-align: left;margin-bottom: 10px;">
                <label style="font-weight: bold">Word #{{ fourWordRandomIndex + 1 }}</label>
            </div>
            <van-row gutter="10">
            <van-col span="8" v-for="(item, index) in fourWordsArray" :key="item">
                <div class="content_hcenter_vcenter"  @click="wordsContentClick(3, index)"
                :style="{backgroundColor: fourWordUserSelectedIndex == index ? 'blue' : '#dbdce4'}"
                style="border-radius: 5px; width: 100%; height: 30px;">
                    <label :style="{color: fourWordUserSelectedIndex == index ? 'white' : '#333'}"
                    style="font-size: 12px; font-weight: bold;">
                        {{ item }}
                    </label>
                </div>
            </van-col>
            </van-row>
        </div>

        <div class="content_hcenter_vcenter" @click="confirmContinueClick"
        :style="{backgroundColor: isActionContinue ? 'blue' : '#eaebee', color: isActionContinue ? 'white' : '#b8bcc5'}"
        style="width: 100%; height: 50px; border-radius: 25px; font-size: 14px; font-weight: bold; margin-top: 350px;">
            Confirm
        </div>
    </div>

</template>

<script>
import { ref, inject } from 'vue';
import { shuffleArray } from '@/utils/utils';
import {
  generateMnemonic,
} from 'web-bip39';
import wordlist from 'web-bip39/wordlists/english';
import { showToast, showDialog } from 'vant';

export default {
    setup() {
        const globalVars = inject("globalVars")
        const secretPhraseList = globalVars.secretPhraseStr.split(' ')
        
        const oneWordRandomIndex = ref(Math.floor(Math.random() * 3))
        const twoWordRandomIndex = ref(Math.floor(Math.random() * 3 + 3))
        const threeWordRandomIndex = ref(Math.floor(Math.random() * 3 + 6))
        const fourWordRandomIndex = ref(Math.floor(Math.random() * 3 + 9))

        const oneWordUserSelectedIndex = ref(-1)
        const twoWordUserSelectedIndex = ref(-1)
        const threeWordUserSelectedIndex = ref(-1)
        const fourWordUserSelectedIndex = ref(-1)
        const isActionContinue = ref(false)

        const oneWordsArray = ref([])
        const twoWordsArray = ref([])
        const threeWordsArray = ref([])
        const fourWordsArray = ref([])
        oneWordsArray.value.push(secretPhraseList[oneWordRandomIndex.value])
        twoWordsArray.value.push(secretPhraseList[twoWordRandomIndex.value])
        threeWordsArray.value.push(secretPhraseList[threeWordRandomIndex.value])
        fourWordsArray.value.push(secretPhraseList[fourWordRandomIndex.value])

        async function loadWords() {
            const myTempwords = await generateMnemonic(wordlist);
            
            const tempWordsList = myTempwords.split(' ')
            for (let index = 0; index < tempWordsList.length; index++) {
                if (index < 2) {
                    oneWordsArray.value.push(tempWordsList[index])
                } else if (index < 4) {
                    twoWordsArray.value.push(tempWordsList[index])
                } else if (index < 6) {
                    threeWordsArray.value.push(tempWordsList[index])
                } else if (index < 8) {
                    fourWordsArray.value.push(tempWordsList[index])
                } else {
                    break
                }
            }
            oneWordsArray.value = shuffleArray(oneWordsArray.value)
            twoWordsArray.value = shuffleArray(twoWordsArray.value)
            threeWordsArray.value = shuffleArray(threeWordsArray.value)
            fourWordsArray.value = shuffleArray(fourWordsArray.value)
        }
        loadWords()

        
        return {
            oneWordRandomIndex,
            twoWordRandomIndex,
            threeWordRandomIndex,
            fourWordRandomIndex,
            oneWordsArray,
            twoWordsArray,
            threeWordsArray,
            fourWordsArray,
            oneWordUserSelectedIndex,
            twoWordUserSelectedIndex,
            threeWordUserSelectedIndex,
            fourWordUserSelectedIndex,
            isActionContinue,
            secretPhraseList,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        confirmContinueClick() {
            if (this.isActionContinue) {
                if (this.secretPhraseList[this.oneWordRandomIndex] == this.oneWordsArray[this.oneWordUserSelectedIndex] &&
                this.secretPhraseList[this.twoWordRandomIndex] == this.twoWordsArray[this.twoWordUserSelectedIndex] && 
                this.secretPhraseList[this.threeWordRandomIndex] == this.threeWordsArray[this.threeWordUserSelectedIndex] &&
                this.secretPhraseList[this.fourWordRandomIndex] == this.fourWordsArray[this.fourWordUserSelectedIndex]
            ) {
                    showToast("验证成功.")
                    const globalVars = inject("globalVars")
                    globalVars.isBackupPhrase = true
                    localStorage.setItem("isBackup", true)
                    this.$router.push({name: "home"})
                } else {
                    // alert
                    showDialog({
                        title: '不正确',
                        message: '所选单词不正确，请重试',
                        theme: 'round-button',
                        confirmButtonText: '再试一次',
                        confirmButtonColor: 'blue',
                        closeOnClickOverlay: true,
                        }).then(() => {
                        // again
                        this.oneWordUserSelectedIndex = -1
                        this.twoWordUserSelectedIndex = -1
                        this.threeWordUserSelectedIndex = -1
                        this.fourWordUserSelectedIndex = -1
                        this.isActionContinue = false
                    });
                }
            }

        },
        wordsContentClick(section, index) {
            if (section == 0) {
                this.oneWordUserSelectedIndex = index
            } else if (section == 1) {
                this.twoWordUserSelectedIndex = index
            } else if (section == 2) {
                this.threeWordUserSelectedIndex = index
            } else {
                this.fourWordUserSelectedIndex = index
            }

            if (this.oneWordUserSelectedIndex > -1 && this.twoWordUserSelectedIndex > -1 
            && this.threeWordUserSelectedIndex > -1 && this.fourWordUserSelectedIndex > -1) {
                this.isActionContinue = true
            }
        },
    }
}
</script>