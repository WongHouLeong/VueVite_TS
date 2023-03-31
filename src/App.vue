<template>
  <el-container>
    <!-- 头部导航栏 -->
    <el-header style="margin:0px ; padding:0px">
      <el-menu default-active="header-1" mode="horizontal" background-color="#393939" text-color="#ffffff"
        @select="handleSelect">
        <div class="logo" @click="handleLogoClick" style="cursor: pointer">
          <el-image src="src/assets/v2_roetur.png" style="width: 190px; height: 55px;  transform: scale(0.93); "
            fit="contain" />
        </div>
        <el-menu-item index="header-1">OKIOS系统</el-menu-item>
        <el-menu-item index="header-2">官网</el-menu-item>
      </el-menu>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="180px">
        <el-menu default-active="aside-1" @open="handleOpen" @close="handleClose">
          <!-- 首页 -->
          <el-menu-item index="aside-1" @click="$router.push({ name: 'MainPage' })">
            <el-icon>
              <Aim />
            </el-icon>
            <span>首页</span>
          </el-menu-item>

          <!-- 工作台 -->
          <el-sub-menu index="aside-2">
            <template #title>
              <el-icon>
                <Plus />
              </el-icon>
              <span>工作台</span>
            </template>
            <el-sub-menu index="aside-1-1">
              <template #title>
                <span>普查宣教</span>
              </template>
              <el-menu-item index="aside-1-1-1">普查管理系统</el-menu-item>
              <el-menu-item index="aside-1-1-2">科普管理系统</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="aside-1-2">门诊运营</el-menu-item>
            <el-menu-item index="aside-1-3">客户管理</el-menu-item>
            <el-menu-item index="aside-1-4">客户服务</el-menu-item>
            <el-menu-item index="aside-1-5">宣传推广</el-menu-item>
            <el-menu-item index="aside-1-6">市场拓展</el-menu-item>
            <el-menu-item index="aside-1-7">财务记账</el-menu-item>
            <el-menu-item index="aside-1-8">行政管理</el-menu-item>
            <el-menu-item index="aside-1-9">通讯工具</el-menu-item>
            <el-menu-item index="aside-1-10">词库维护</el-menu-item>
            <el-menu-item index="aside-1-11">预警修复</el-menu-item>
            <el-menu-item index="aside-1-12">数据统计</el-menu-item>
            <el-menu-item index="aside-1-13">进修培训</el-menu-item>
          </el-sub-menu>

          <!-- 机构管理 -->
          <el-sub-menu index="aside-3">
            <template #title>
              <el-icon>
                <document />
              </el-icon>
              <span>机构管理</span>
            </template>
            <div style="display: flex; align-items: center;">
              <el-input placeholder="输入类别名称" prefix-icon="Plus" @focus="onInputFocus" @blur="onInputBlur"
                v-model="input1" />
              <el-button v-show="showSaveButton" type="primary" size="small" style="margin-left: 5px;">保存</el-button>
            </div>
            <el-input class="aside-3-3" placeholder="添加机构" prefix-icon="Plus" readonly />
            <el-input placeholder="输入机构名称" prefix-icon="Search" v-model="input3" />
            <el-menu-item index="aside-3-4">医疗机构</el-menu-item>
            <el-menu-item index="aside-3-5">行政单位</el-menu-item>
            <el-menu-item index="aside-3-6">教育园校</el-menu-item>
          </el-sub-menu>

          <!-- 人员管理 -->
          <el-sub-menu index="aside-4">
            <template #title>
              <el-icon>
                <Bell />
              </el-icon>
              <span>人员管理</span>
            </template>
            <el-menu-item index="aside-4-1">OKIOS</el-menu-item>
            <el-menu-item index="aside-4-2">医疗机构</el-menu-item>
            <el-menu-item index="aside-4-3">行政单位</el-menu-item>
            <el-menu-item index="aside-4-4">教育园校</el-menu-item>
            <el-menu-item index="aside-4-5">供应商</el-menu-item>
          </el-sub-menu>

          <!-- 审核注册 -->
          <el-sub-menu index="aside-aside-5">
            <template #title>
              <el-icon>
                <setting />
              </el-icon> <span>审核注册</span>
            </template>
            <el-menu-item index="aside-5-1">审核机构注册</el-menu-item>
            <el-menu-item index="aside-5-2">审核人员注册</el-menu-item>
          </el-sub-menu>

          <!-- Test -->
          <el-menu-item index="aside-aside-6" @click="$router.push({ name: 'TestPage' })">
            <el-icon>
              <Star />
            </el-icon>
            <span>Test</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主要内容区 -->
      <el-main>
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="Home" name="/">
            <router-view />
          </el-tab-pane>
          <el-tab-pane label="About" name="/TestPage">
            <router-view />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

// 打开侧边栏菜单项
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 关闭侧边栏菜单项
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const activeIndex = ref('1')

// 顶部导航菜单选择处理
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 点击 Logo 处理
const handleLogoClick = () => {
  console.log('LOGO clicked')
}

const showSaveButton = ref(false)

// 类别名称输入框获得焦点时显示保存按钮
const onInputFocus = () => {
  showSaveButton.value = true
}

// 类别名称输入框失去焦点时隐藏保存按钮
const onInputBlur = () => {
  showSaveButton.value = false
}

const input1 = ref('')
const input3 = ref('')

export default defineComponent({
  setup() {
    const router = useRouter();
    const activeTab = ref<string>('/');
    const handleTabClick = (tab: any) => {
      activeTab.value = tab.props.name;
      router.push(tab.props.name);
    };

    return {
      activeTab,
      handleTabClick,
      handleOpen,
      handleClose,
      activeIndex,
      handleSelect,
      handleLogoClick,
      showSaveButton,
      onInputFocus,
      onInputBlur,
      input1,
      input3
    };
  },
});
</script>

<style scoped></style>
