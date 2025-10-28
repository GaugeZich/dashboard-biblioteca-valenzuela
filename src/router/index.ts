import DashboardPage from '@/pages/DashboardPage.vue'
import LibrosForm from '@/pages/LibrosForm.vue'
import LibrosList from '@/pages/LibrosList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: DashboardPage, children: [
        {path: '/libros', component: LibrosList},
        {path: '/libros/nuevo', component: LibrosForm}
      ]
    }
  ],
})

export default router
