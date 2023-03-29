<template>
  <!-- 共通佈局容器 -->
  <div class="common-layout">
    <!-- 页面主容器 -->
    <el-container>
      <!-- 页面顶部导航 -->
      <el-header >
  
        <!-- 水平导航菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" 
          background-color="#545c64" text-color="#ffffff" @select="handleSelect">
          <!-- LOGO菜单项 -->
          <el-menu-item index="0">
            <el-image src="src/assets/v2_roetur.png" style="width: 130px; height: 53px; transform: scale(1.25);"
              fit="contain" />
          </el-menu-item>
          <!-- 占位元件，用于扩展菜单间距 -->
          <div class="flex-grow" />
          <el-menu-item index="1">OKIOS系统</el-menu-item>
          <el-menu-item index="2">官网 </el-menu-item>
        </el-menu>
      </el-header>
      <!-- 页面主内容容器 -->
      <el-container>
        <!-- 页面左侧导航 -->
        <el-aside width="380px">
          <!-- 垂直导航菜单 -->
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <!-- Navigator One下拉菜单 -->
                <el-menu-item index="1">
                  <el-icon>
                    <Aim />
                  </el-icon>
                  <span>首页</span>
                </el-menu-item>
                <!-- Navigator Two菜单项 -->
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon>
                      <Plus />
                    </el-icon>
                    <span>工作台</span>
                  </template>
                  <el-menu-item index="1-1">普查宣教</el-menu-item>
                  <el-menu-item index="1-2">门诊运营</el-menu-item>
                  <el-menu-item index="1-3">客户管理</el-menu-item>
                  <el-menu-item index="1-4">客户服务</el-menu-item>
                  <el-menu-item index="1-5">宣传推广</el-menu-item>
                  <el-menu-item index="1-6">市场拓展</el-menu-item>
                  <el-menu-item index="1-7">财务记账</el-menu-item>
                  <el-menu-item index="1-8">行政管理</el-menu-item>
                  <el-menu-item index="1-9">通讯工具</el-menu-item>
                  <el-menu-item index="1-10">词库维护</el-menu-item>
                  <el-menu-item index="1-11">预警修复</el-menu-item>
                  <el-menu-item index="1-12">数据统计</el-menu-item>
                  <el-menu-item index="1-13">进修培训</el-menu-item>
                </el-sub-menu>
                <!-- Navigator Three 菜单项-->
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon>
                      <document />
                    </el-icon>
                    <span>机构管理</span>
                  </template>
                  <el-menu-item index="3-3">医疗机构</el-menu-item>
                  <el-menu-item index="3-4">行政单位</el-menu-item>
                  <el-menu-item index="3-5">教育园校</el-menu-item>
                </el-sub-menu>
                <!-- Navigator Four菜单项 -->

                <el-sub-menu index="4">
                  <template #title>
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>人员管理</span>
                  </template>
                  <el-menu-item index="4-1">OKIOS</el-menu-item>
                  <el-menu-item index="4-2">医疗机构</el-menu-item>
                  <el-menu-item index="4-3">行政单位</el-menu-item>
                  <el-menu-item index="4-4">教育园校</el-menu-item>
                  <el-menu-item index="4-5">供应商</el-menu-item>
                </el-sub-menu>
                <!-- Navigator Four菜单项 -->
                <el-sub-menu index="5">

                  <template #title>
                    <el-icon>
                      <setting />
                    </el-icon> <span>审核注册</span>
                  </template>

                  <el-menu-item index="5-1">审核机构注册</el-menu-item>
                  <el-menu-item index="5-2">审核人员注册</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 页面主要内容区域 -->
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// 汇入 Vue 和 Element Plus 所需模组
import { ref } from 'vue'


// 开启菜单项事件处理器
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 关闭菜单项事件处理器
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 初始激活的菜单项索引
const activeIndex = ref('1')

// 选择菜单项事件处理器
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<!-- 自定义样式 -->
<style>

</style>

