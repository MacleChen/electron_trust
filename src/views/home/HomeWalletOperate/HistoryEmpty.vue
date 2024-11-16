<template>
    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px;">
        <div>
            <img src="../../../assets/asserts/illustration-not-found-data_Normal@2x.png" width="100px" />
        </div>

        <div style="margin-top: 20px;">
            <label class="global_desciption_text_style">Transactions will appear here.</label>
        </div>

        <div style="margin-top: 15px;">
            <label class="global_desciption_text_style">Can't find your transaction?</label>
            <label class="global_desciption_text_style" style="color: #0400f4; margin-left: 5px;"
            @click="checkExplorerClick">Check explorer</label>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        checkExplorerClick() {
            this.$router.push({name: 'selectAssetView'})
        }
    }
}
</script>