<template>
    <el-button type="primary" @click="GoToMain">Primary</el-button>
</template>

<script lang="ts">
export default {
 methods: {
    GoToMain() {
      this.$router.push({ name: 'MainPage' });
    }
  }
}
</script>