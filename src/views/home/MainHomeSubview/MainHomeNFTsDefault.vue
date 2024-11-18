<template>
    <div>
        <div style="margin-top: 100px;">
            <img src="../../../assets/asserts/illustration-empty_Normal@2x.png" width="70px" />
        </div>

        <div style="margin-top: 10px;">
            <label style="font-size: 12px; color: #868d9a;">No NFTs yet. Purchased or received NFTs will show up here.</label>
        </div>

        <div style="margin-top: 20px;" @click="receiveNFTClick">
            <label style="font-size: 12px; color: blue;">Receive NFTs</label>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        receiveNFTClick() {
            this.$router.push({name: 'receiveCryptoView'})
        }
    }
}
</script>