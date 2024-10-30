<template>
    <div class="dapp_header_container content_hleft_vcenter">
        <div class="content_hleft_vcenter" style="width: 50%;">
            <label style="font-size: 14px; color: black; font-weight: bold;">
                {{ headerTitle }}
            </label>
        </div>

        <div class="content_hright_vcenter" style="width: 50%;">
            <div class="dapp_header_right_containter content_hcenter_vcenter">
                <img style="float: right; width: 20px; height: 20px;" src="../../../assets/asserts/chevron-right-f-24_Normal@2x.png"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerTitle: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>
.dapp_header_container {
    margin-left: 15px; 
    margin-right: 15px; 
    margin-top: 10px;
    height: 44px;
}

.dapp_header_right_containter {
    width: 30px;
    height: 30px;
    background-color: #f4f4f6;
    border-radius: 5px;
}


</style>