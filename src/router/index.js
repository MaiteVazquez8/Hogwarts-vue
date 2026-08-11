import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Escuela from '../views/Escuela.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/escuela', component: Escuela }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router