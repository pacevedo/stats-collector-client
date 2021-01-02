import { createWebHistory, createRouter } from "vue-router";

import RoundCollector from '../views/RoundCollector.vue'
import PlayerCollector from '../views/PlayerCollector.vue'

const routes = [
  {
    path: '/',
    name: 'RoundCollector',
    component: RoundCollector
  },
  {
    path: '/player',
    name: 'PlayerCollector',
    component: PlayerCollector
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router