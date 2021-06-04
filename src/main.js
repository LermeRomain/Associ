import Vue from 'vue'
import App from './App.vue'
import router from './router'


// createApp(App).use(router).mount('#app')
new Vue({
    router,
    // store,
    // bootstrap,
    render: h => h(App),
}).$mount('#app')