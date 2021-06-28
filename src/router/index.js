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
        path:'/Create',
        name: 'Creation asso',
        components: {
            default: () => import(/* webpackChunkName: "Mentionslegales" */ '@/Create.vue'),
        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
