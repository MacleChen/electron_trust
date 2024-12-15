<template>
    <div class="content_hleft_vcenter" v-for=" item in dataSourceList" :key="item.title" 
        @click="cellClick(item)"
        style="height: 60px;">
        <div style="width: 15%;">
            <img :src="item.imgStr" width="30px" height="30px" style="border-radius: 15px; object-fit: cover;"/>
        </div>

        <div style="width: 85%; text-align: left;">
            <div>
                <label class="global_primary_black_text_style truncate-oneline-label">{{ item.title }}</label>
            </div>

            <div style="width: 320px;">
                <label class="global_desciption_text_style break-text truncate-label">{{ item.subtitle }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRequest } from 'vue-hooks-plus';

export default {
    props: {
        isLimitShow: {type: Boolean}
    },
    setup(props) {
        const isMyLimitShow = ref(props.isLimitShow)
        // const cryptoPanicAuthKey = "29cbca8485554dde3dddceec5a34c09bc4577c1a"
        // const newApiAuthKey = "0009fdd26240443b8a1d570ed85df799"

        const dataSourceList = ref([]);

        // 请求币的市场列表
    var { data } = useRequest(() => {
        return fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-15&sortBy=publishedAt&apiKey=0009fdd26240443b8a1d570ed85df799').then(res => res.json());
    })
    watch(data, (newValue) => {
        for(var i = 0; i < newValue.articles.length; i++) {
            const newsDict = newValue.articles[i]
            dataSourceList.value.push({title: newsDict.title, 
                subtitle: newsDict.description, 
                link: newsDict.url,
                imgStr: newsDict.urlToImage
            })
            if (isMyLimitShow.value && i > 3) {
              break
            }
        }
    })

        return {
            dataSourceList,
            isMyLimitShow,
        }
    },
    methods: {
        cellClick(item) {
            this.$emit('valueChanged', item)
        }
    }
}
</script>

<style>
.truncate-label {
  display: -webkit-box;           /* 必须设置为 flexbox 样式 */
  -webkit-line-clamp: 2;          /* 设置最多显示两行 */
  -webkit-box-orient: vertical;   /* 垂直排列 */
  overflow: hidden;               /* 隐藏超出的内容 */
  text-overflow: ellipsis;        /* 超出部分用省略号表示 */
  line-height: 1.5em;             /* 设置行高 */
  max-height: 3em;                /* 限制最大高度为两行的高度 */
}

.truncate-oneline-label {
  display: -webkit-box;           /* 必须设置为 flexbox 样式 */
  -webkit-line-clamp: 1;          /* 设置最多显示两行 */
  -webkit-box-orient: vertical;   /* 垂直排列 */
  overflow: hidden;               /* 隐藏超出的内容 */
  text-overflow: ellipsis;        /* 超出部分用省略号表示 */
  line-height: 1.5em;             /* 设置行高 */
  max-height: 3em;                /* 限制最大高度为两行的高度 */
}
</style>