<template>
    <van-nav-bar title="Notifications" @click-left="navBarLeftClick" :fixed="true" >
        <template #left>
            <img src="../../../assets/asserts/arrow-left-f_Normal@2x.png" style="height: 24px; width: 24px;" />
        </template>
    </van-nav-bar>

    <URLSessionFailed v-if="showErrorTypeStatus == -1"  />
    <NotificationsEmpty v-if="showErrorTypeStatus == 0" />
</template>

<script>
import { ref } from 'vue';
import URLSessionFailed from './URLSessionFailed.vue';
import NotificationsEmpty from './NotificationsEmpty.vue';

export default {
    setup() {
        const showErrorTypeStatus = ref(0)

        return {
            showErrorTypeStatus,
        }
    },
    components: {
        URLSessionFailed,
        NotificationsEmpty,
    },
    methods: {
        navBarLeftClick() {
            this.$router.back()
        }
    }
}
</script>