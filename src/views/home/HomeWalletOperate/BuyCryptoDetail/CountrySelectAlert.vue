<template>
<div style="min-height: 100vh;">
    <van-search
            v-model="searchValue"
            shape="round"
            background="#fff"
            placeholder="Search"
            @search="onSearch"
            @clear="onSearchCancel"
            clear-trigger="always"
            />

    <div style="margin-left: 15px; margin-right: 15px;">
        <div style="text-align: left;">
            <label class="global_desciption_text_style">Popular</label>
        </div>

        <!-- popular -->
        <div class="content_hleft_vcenter" style="height: 40px;"
            v-for="(item, index) in countryPopularList" :key="index"
            @click="popularCellContentClick(item)">
            <div style="width: 10%; text-align: left">
                <img :src="require('@/assets/asserts/' + item.imgStr)" width="25px" />
            </div>

            <div style="width: 80%; text-align: left;">
                <label class="global_primary_black_text_style">{{ item.title }}</label>
            </div>

            <div style="width: 10%;">
                <img v-if="item.title == selectedCountry" src="../../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" width="20px" />
            </div>
        </div>

        <!-- All  -->
        <div style="text-align: left; margin-top: 10px;">
            <label class="global_desciption_text_style">All</label>
        </div>
        <div class="content_hleft_vcenter" style="height: 40px;"
            v-for="(item, index) in countryAllList" :key="index"
            @click="popularCellContentClick(item)">
            <div style="width: 90%; text-align: left;">
                <label class="global_primary_black_text_style">{{ item.title }}</label>
            </div>

            <div style="width: 10%;">
                <img v-if="item.title == mySelectedCountry" src="../../../../assets/asserts/icon-checkmark_Normal_blue@2x.png" width="20px" />
            </div>
        </div>
    </div>
    
    
</div>
    
</template>

<script>
import { ref } from 'vue';
import { localStorageSetDict } from '@/utils/utils';

export default {
    props: {
        selectedCountry: {type: String}
    },
    setup(props) {
        const mySelectedCountry = ref(props.selectedCountry)

        const countryPopularList = ref([
            {title: "AUD - Australian Dollar", flag: 'A$', imgStr: 'currency_aud_Normal@2x.png'},
            {title: "EUR - Euro", flag: '€', imgStr: 'currency_eur_Normal@2x.png'},
            {title: "GBP - British Pound", flag: '£', imgStr: 'currency_gbp_Normal@2x.png'},
            {title: "USD - US Dollar", flag: '$', imgStr: 'currency_usd_Normal@2x.png'},
        ]);

        const countryAllList = ref([
            {title: "AED - United Arab Emirates Dirham", flag: 'AED'},
            {title: "AFN - Afghan Afghani", flag: 'AFN'},
            {title: "ALL - Albanian Lek", flag: 'ALL'},
            {title: "AMD - Armenian Dram", flag: 'AMD'},
        ]);

        const searchValue = ref('');
        var backupCountryPopularList = countryPopularList
        var backupCountryAllList = countryAllList


        const onSearch = (val) => {
            if (val == '') {
                countryPopularList.value = backupCountryPopularList
                countryAllList.value = backupCountryAllList
            } else {
                countryPopularList.value = backupCountryPopularList.filter((dataModel) => dataModel.title.toLowerCase().includes(val.toLowerCase()))
                countryAllList.value = backupCountryAllList.filter((dataModel) => dataModel.title.toLowerCase().includes(val.toLowerCase()))
            }
        }

        const onSearchCancel = () => {
            countryPopularList.value = backupCountryPopularList
            countryAllList.value = backupCountryAllList
        }

        return {
            countryPopularList,
            countryAllList,
            onSearch,
            onSearchCancel,
            searchValue,
            mySelectedCountry,
        }

    },
    methods: {
        popularCellContentClick(item) {
            this.mySelectedCountry = item.title
            localStorageSetDict('buyCryptoCountry', item)
            this.$emit("valueChanged", item)
        },
        allCellContentClick(item) {
            this.mySelectedCountry = item.title
            localStorageSetDict('buyCryptoCountry', item)
            this.$emit("valueChanged", item)
        }
    }
}
</script> 