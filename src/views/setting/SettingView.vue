<template>
    <div>
        <van-nav-bar title="设置" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar> 
    <div style="padding-top: 60px;">
        <ul v-for="(item, index) in settingList" :key="item.title" @click="settingCellClick(index, item.title)">
        <div class="setting_cell_containter" >
            <div class="content_hcenter_vcenter" style="width: 10%; height: 20px;">
                <img :src="item.imgStr" width="15px" />
            </div> 
            <div style="width: 80%; text-align: left; margin-left: 10px;">
                <div><label style="font-weight: bold;">{{ item.title }}</label> </div>
                <div v-if="item.subTitle != null"><label style="font-size: 12px; color: #868d9a;">{{ item.subTitle }}</label> </div>
            </div>
            <div style="width: 10%;">
                <img style="width: 5px; height: 10px; margin-right: 20px;" src="../../assets/asserts/Arrow Right (1)_Normal@3x.png"/>
            </div>
        </div>
        <div class="dividerLittle" 
        v-if="item.isHasBottomLine"
        style="margin-left: 20px; margin-right: 20px; background-color: #eaebee;"></div>
        </ul>
    </div>
    </div>
    
    <van-action-sheet v-model:show="isShowSecurity" title="Verify passcode">
        <ConfirmPasscodeAlert @valueChanged="confirmPasscodeCallback" /> 
    </van-action-sheet>
</template>

<script>
import { ref, inject } from 'vue';
import ConfirmPasscodeAlert from '../discover/widgets/ConfirmPasscodeAlert.vue';
import { showToast } from 'vant';

export default {
    setup() {
        const settingList = ref([
        {title: 'Preferences', imgStr: require('../../assets/asserts/icon-settings-cog_Normal@2x.png')},
        {title: 'Help Center', imgStr: require('../../assets/asserts/circled-question-f_Normal@2x.png')},
        {title: 'Support', imgStr: require('../../assets/asserts/cs-f_Normal@2x.png')},
        {title: 'About', isHasBottomLine: true, imgStr: require('../../assets/asserts/about_Normal@2x.png')},
        {title: 'X(formerly Twitter)', imgStr: require('../../assets/asserts/social-x-f_Normal@2x.png')},
        {title: 'Telegram', imgStr: require('../../assets/asserts/social-telegram-f_Normal@2x.png')},
        {title: 'Facebook', imgStr: require('../../assets/asserts/social-facebook-f_Normal@2x.png')},
        {title: 'Reddit', imgStr: require('../../assets/asserts/social-reddit-f_Normal@2x.png')},
        {title: 'YouTube', imgStr: require('../../assets/asserts/social-youtube-f_Normal@2x.png')},
        {title: 'Instagram', imgStr: require('../../assets/asserts/social-instagram-f_Normal@2x.png')},
        ]);

        if (process.env.NODE_ENV !== 'production') {
            settingList.value.push({title: 'Clear Cache', imgStr: require('../../assets/asserts/social-instagram-f_Normal@2x.png')})
        }

        const globalVars = inject("globalVars")
        const isHasPhrase = globalVars.secretPhraseStr == null ? ref(false) : ref(globalVars.secretPhraseStr.split(' ').length == 12)

        if (isHasPhrase.value) {
            const newTopArray = [{title: 'Wallets', isHasBottomLine: true, subTitle: 'Main Wallet', imgStr: require('../../assets/asserts/wallet-f_Normal@2x.png')},
            {title: 'Price Alerts', imgStr: require('../../assets/asserts/payment-f_Normal@2x.png')},
            {title: 'Address Book', imgStr: require('../../assets/asserts/sub-account-f_Normal@2x.png')},
            {title: 'Trust handles', imgStr: require('../../assets/asserts/tutorial-1c_Normal.png')},
            {title: 'WalletConnect', isHasBottomLine: true, imgStr: require('../../assets/asserts/wallet-connect_Normal@2x.png')}]
            settingList.value.splice(0, 0, ...newTopArray)

            const newCenterArray = [
            {title: 'Security', imgStr: require('../../assets/asserts/lock-close-f_Normal@2x.png')},
            {title: 'Notifications', isHasBottomLine: true, imgStr: require('../../assets/asserts/notifications-f_Normal@2x.png')}
            ]
            settingList.value.splice(6, 0, ...newCenterArray)

        }

        const isShowSecurity = ref(false)

        return { 
            settingList,
            isShowSecurity, 
        }
    },
    name: 'SettingView',
    components: {
        ConfirmPasscodeAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back();
    },
    settingCellClick(index, title) {
        console.log('' + index)
        if (title == "Preferences") {
            this.$router.push({ name: 'preferences' });
        } else if (title == "Wallets") {
            this.$router.push({ name: 'settingWalletsView' });
        } else if (title == "Price Alerts") {
            this.$router.push({ name: 'settingPriceAlertsView' });
        } else if (title == "Address Book") {
            this.$router.push({ name: 'addressBookView' });
        } else if (title == "Trust handles") {
            this.$router.push({ name: 'trustHandlesView' });
        } else if (title == "WalletConnect") {
            this.$router.push({ name: 'walletConnectView' });
        } else if (title == "Security") {
            this.isShowSecurity = true
        } else if (title == "Notifications") {
            this.$router.push({ name: 'settingNotificationsView' });
        } else if (title == "About") {
            this.$router.push({ name: 'settingAboutView' });
        } else if (title == "Help Center") {
            require('electron').shell.openExternal('https://community.trustwallet.com/c/helpcenter/8')
        } else if (title == "Support") {
            this.$router.push({ name: 'commonWebView', query: { requestURL: 'https://support.trustwallet.com/en/support/home' } })
        } else if (title == "X(formerly Twitter)") {
            require('electron').shell.openExternal('https://x.com/')
        } else if (title == "Telegram") {
            require('electron').shell.openExternal('https://telegram.org/')
        } else if (title == "Facebook") {
            require('electron').shell.openExternal('https://www.facebook.com/l')
        } else if (title == "Reddit") {
            require('electron').shell.openExternal('https://www.reddit.com/')
        } else if (title == "YouTube") {
            require('electron').shell.openExternal('https://www.youtube.com/')
        } else if (title == "Instagram") {
            require('electron').shell.openExternal('https://www.instagram.com/')
        } else if (title == "Clear Cache") {
            showToast("Clear Cache Done. Please Restart App")
            localStorage.clear()
        }
        
        
    },
    confirmPasscodeCallback(isConfirm) {
        if (isConfirm) {
            this.isShowSecurity = false
            this.$router.push({ name: "settingSecurityView" })
        }
    } 
    }
 }
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
.setting {
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* 你想要的背景颜色 */
}
.setting_cell_containter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}

</style>