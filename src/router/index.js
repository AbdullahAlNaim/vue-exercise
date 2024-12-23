import { createRouter, createWebHistory } from 'vue-router'
import.meta.env.BASE_UR

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_UR), routes
})

export default router;