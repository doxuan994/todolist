// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: Routes
});



/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router: router
})
