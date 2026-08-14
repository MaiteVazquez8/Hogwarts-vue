import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Escuela from '../views/Escuela.vue'
import Formulario from '../views/FormularioCasas.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/escuela', component: Escuela },
  { path: '/formulario', component: Formulario },
  { path: '/furmulario', redirect: '/formulario' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router