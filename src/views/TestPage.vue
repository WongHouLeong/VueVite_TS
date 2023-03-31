<template>
Test
</template>
  

  

<script lang="ts">
import { defineComponent } from 'vue';
import { HttpGetDemo, HttpPostDemo } from '@/api';
import { ElNotification } from 'element-plus';
export default defineComponent({
    methods: {
        async HttpGet() {
            try {
                const response = await HttpGetDemo(11);
                if (response.data.code === 0) {
                    ElNotification({ message: response.data.message, type: 'success' });
                } else {
                    ElNotification({ message: response.data.message, type: 'error' });
                }
            } catch (error: any) {
                console.error(error);
                if (error.response && error.response.status !== 401) {
                    ElNotification({ message: '请求失败，请稍后重试', type: 'error' });
                }
            }
        },
        async HttpPost() {
            try {
                const response = await HttpPostDemo();
                if (response.data.code === 0) {
                    ElNotification({ title: '成功', message: response.data.message, type: 'success' });
                } else {
                    ElNotification({ message: response.data.message, type: 'error' });
                }
            } catch (error: any) {
                console.error(error);
                if (error.response && error.response.status !== 401) {
                    ElNotification({ message: '请求失败，请稍后重试', type: 'error' });
                }
            }
        }
    }
});
</script>
