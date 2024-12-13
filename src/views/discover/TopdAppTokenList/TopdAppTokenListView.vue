<template>
    <van-nav-bar title="Top dApp tokens" @click-left="navBarLeftClick" :fixed="true" :border="false">
        <template #left>
            <img src="@/assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <div style="margin-left: 15px; margin-right: 15px; margin-top: 50px;">
        <div v-for="item in dataList" :key="item.title" @click="dappTokenCellCkick(item)"
        class="content_hleft_vcenter" style="margin-top: 15px;"  >
            <div style="width:10%">
                <img :src="item.imgStr" style="height: 24px; width: 24px;" />
            </div>

            <div style="width: 90%;">
                <div class="content_hspacebwn_vcenter">
                    <div>
                        <label class="global_primary_black_text_style">{{ item.subtitle }}</label>
                    </div>
                    <div>
                        <label class="global_primary_black_text_style" style="font-size: 12px;">${{ item.totalMoney }}</label>
                    </div>
                </div>

                <div class="content_hspacebwn_vcenter" style="margin-top: -5px;">
                    <div>
                        <label class="global_desciption_text_style">{{ item.title }}</label>
                    </div>
                    <div>
                        <label class="global_desciption_text_style" :style="{color: item.percent > 0 ? 'green' : 'red'}" style="font-size: 10px;">{{ item.percent }}%</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        const route = useRoute()
        const dataList = ref(JSON.parse(route.query.dataList))

        return {
            dataList,
        }
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        },
        dappTokenCellCkick(item) {
            console.log(item.title)
            this.$router.push({name: 'cryptoDetailView', query: { dataItem: JSON.stringify(item)}})
        }
    }
}
</script>