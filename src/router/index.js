import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '@/Home.vue'),
        },
    },

    {
        path:'/Legale',
        name: 'Mentionslegales',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Legale.vue'),
        },
    },

    {
        path:'/Fonctionnalités',
        name: 'Fonctionnalités',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Fonctionnalités.vue'),
        },
    },

    {
        path:'/Contacter',
        name: 'Contacter',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Contacter.vue'),
        },
    },

    {
        path:'/Quizz',
        name: 'Quizz',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Quizz.vue'),
        },
    },

    {
        path:'/Qui_sommes_nous',
        name: 'Qui sommes nous',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Qui sommes nous.vue'),
        },
    },

    {
        path:'/Tarifs',
        name: 'Tarifs',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Tarifs'),
        },
    },

    {
        path:'/Presse',
        name: 'Presse',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Presse'),
        },
    },

    {
        path:'/Webinaire',
        name: 'Webinaire',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Webinaire'),
        },
    },

    {
        path:'/Blogs',
        name: 'Blogs',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Blogs'),
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
