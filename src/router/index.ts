import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'

//前置函数
function requireAuth(to: any, from: any, next: any) {
  const token = localStorage.getItem('token');
  if (!token) {
    next({ name: 'LoginPage' }); //检查本地是否有token,没有就转到登录页
  } else {
    next();
  }
}

const routes = [
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/', //主页 根目录
    name: 'MainPage',
    component: MainPage,
    beforeEnter: requireAuth //进行这个页面前先进入requireAuth函数
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router