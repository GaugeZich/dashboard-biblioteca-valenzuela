import Libros from '@/components/Libros.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: DashboardPage, children: [
        {path: 'libros', component: Libros},
      ]
    }
  ],
})

export default router
