<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-bottom: 100px">
        <div class="wallet_alert_top_img">
            <img src="../../../assets/asserts/tw-safe_Normal@2x.png" width="143" />
        </div>

        <CreateImportWalletVCard />

        <p style="text-align: left; font-size: 12px; color: #cfa136; font-weight: bold">* Only multi-coin wallets are eligible for points.</p>
    </div>
</template>

<script>
import CreateImportWalletVCard from '@/views/home/CreateImportWalletVCard.vue';

export default {
    components: {
        CreateImportWalletVCard,
    }
}
</script>

<style>
.wallet_alert_top_img {
    margin-bottom: 20px;
}
</style>