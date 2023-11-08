import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      component: Inicio,
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: { titulo: 'Agregar Cliente' }
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    
  ]
})

export default router
