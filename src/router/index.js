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
        path:'/legale',
        name: 'legale',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/legale.vue'),
        },
    },

    {
        path:'/fonctionnalités',
        name: 'fonctionnalités',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/fonctionnalités.vue'),
        },
    },

    {
        path:'/contacter',
        name: 'contacter',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/contacter.vue'),
        },
    },

    {
        path:'/quizz',
        name: 'quizz',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/quizz.vue'),
        },
    },

    {
        path:'/qui-sommes-nous',
        name: 'qui sommes nous',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/qui sommes nous.vue'),
        },
    },

    {
        path:'/tarifs',
        name: 'tarifs',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/tarifs.vue'),
        },
    },

    {
        path:'/presse',
        name: 'presse',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/presse.vue'),
        },
    },

    {
        path:'/webinaire',
        name: 'webinaire',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/webinaire.vue'),
        },
    },

    {
        path:'/blogs',
        name: 'blogs',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/blogs.vue'),
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
})
export default router
