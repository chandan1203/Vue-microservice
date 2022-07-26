import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AdminProject from '../pages/admin/AdminProject.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AdminProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
