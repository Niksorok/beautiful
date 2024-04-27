import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import PhotosPage from '../views/PhotosPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/photos/:name/:number',
      name: 'photos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PhotosPage
    }
  ]
})

export default router
