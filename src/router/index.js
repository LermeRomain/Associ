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
        path:'/Fonctionnalite',
        name: 'Fonctionnalite',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Fonctionnalite.vue'),
        },
    },

    {
        path:'/Contacter',
        name: 'Contacter',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Contacter.vue'),
        },
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
