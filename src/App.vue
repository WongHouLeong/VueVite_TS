<template>
  <!-- 共通佈局容器 -->
  <div class="common-layout">
    <!-- 页面主容器 -->
    <el-container>
      <!-- 页面顶部导航 -->
      <el-header>
        <!-- 水平导航菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <!-- LOGO菜单项 -->
          <el-menu-item index="0">LOGO</el-menu-item>
          <!-- 占位元件，用于扩展菜单间距 -->
          <div class="flex-grow" />
          <!-- 处理中心菜单项 -->
          <el-menu-item index="1">Processing Center</el-menu-item>
          <!-- 工作区下拉菜单 -->
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <!-- item four下拉菜单 -->
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <!-- 页面主内容容器 -->
      <el-container>
        <!-- 页面左侧导航 -->
        <el-aside width="380px">
          <!-- 垂直导航菜单 -->
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <!-- Navigator One下拉菜单 -->
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <location />
                    </el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <!-- item four下拉菜单 -->
                  <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <!-- Navigator Two菜单项 -->
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <span>Navigator Two</span>
                </el-menu-item>
                <!-- Navigator Three菜单项（已禁用） -->
                <el-menu-item index="3" disabled>
                  <el-icon>
                    <document />
                  </el-icon>
                  <span>Navigator Three</span>
                </el-menu-item>
                <!-- Navigator Four菜单项 -->
                <el-menu-item index="4">
                  <el-icon>
                    <setting />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
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
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

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
.flex-grow {
  flex-grow: 1;
}
</style>

