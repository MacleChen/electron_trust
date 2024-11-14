<template>
    <div>
        <div style="margin-top: 200px;">
            <img src="../../../assets/asserts/illustration-not-found-data_Normal@2x.png" width="100px" />
        </div>

        <div>
            <label class="global_desciption_text_style">No result found.</label>
        </div>

        <div @click="importClick"
        class="global_primary_blue_text_style"
        style="margin-top: 20px;">
            Didn't see your crypto? Import
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        importClick() {
            this.$emit('valueChanged')
        }
    }
}
</script>