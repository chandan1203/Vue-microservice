import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AdminProject from '../pages/admin/AdminProject.vue'
import ProductComponent from '../pages/admin/ProductComponent.vue'
import MainComponent from '../pages/MainComponent.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainComponent
  },
  {
    path: '/admin',
    component: AdminProject,
    children: [
      {path: 'products', component: ProductComponent},
      {path: 'products/create', component: ProductCreate},
      {path: 'products/:id/edit', component: ProductEdit}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
