<template>
    <van-nav-bar title="Backup" @click-left="navBarLeftClick" @click-right="navBarRightClick">
        <template #left>
            <img src="../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
        <template #right>
            <div class="content_hcenter_vcenter" style="background-color: #f4f4f6; color: blue; font-size: 10px;font-weight: bold; width: 40px; border-radius: 5px;">
                SKIP
            </div>
        </template>
    </van-nav-bar> 

    <div class="content_hcenter_vcenter" style="width: 100%; height: 100vh;">
        <div style="margin-left: 15px; margin-right: 15px;">
            <div>
                <img src="../../assets/asserts/tw-storage-light_Normal@2x.png" width="200px" />
            </div>

            <h2>Back up secret phrase</h2>
            <h5>Protect your assets by backing up your seed phrase now.</h5>

            <div class="content_hcenter_vcenter" @click="backupManuallyClick"
            style="background-color: #f4f4f6; width: 100%; height: 50px; border-radius: 25px; color: blue; font-size: 14px; font-weight: bold;margin-top: 100px;">
                Back up manually
            </div>

            <div class="content_hcenter_vcenter" @click="backupiCloudClick"
            style="background-color: #f4f4f6; width: 100%; height: 50px; border-radius: 25px; color: blue; font-size: 14px; font-weight: bold; margin-top: 15px;">
                Back up iCloud
            </div>
        </div>
    </div>

    <!-- 全局的创建和导入钱包弹窗 -->
    <van-action-sheet v-model:show="isWalletManuallyAlertShow" title="Tip">
        <BackupWalletSecretTipAlert @valueChanged="secretTipAlertContinueClick" /> 
    </van-action-sheet>
</template>

<script>
import { showDialog } from 'vant';
import BackupWalletSecretTipAlert from '../discover/widgets/BackupWalletSecretTipAlert.vue';
import { ref } from 'vue';

export default {
    setup() {
        const isWalletManuallyAlertShow = ref(false)

        return {
            isWalletManuallyAlertShow,
        }
    },
    components: {
        BackupWalletSecretTipAlert,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }, 
        navBarRightClick() {
            this.$router.go(-3)
        },
        backupManuallyClick() {
            this.isWalletManuallyAlertShow = true
        },
        backupiCloudClick() {
            showDialog({
                title: 'ICloud disabled',
                message: 'Please, got to setting and sign in with your iCloud account',
                confirmButtonText: 'OK'
                }).then(() => {
                // on close
            });
        },
        secretTipAlertContinueClick() {
            this.isWalletManuallyAlertShow = false
            this.$router.push({ name: "secretPhraseView" })
        }
    }
}
</script>