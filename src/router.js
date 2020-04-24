import Vue from "vue"
import Router from "vue-router";

import Home from './components/Home'
import Services from './components/Services'
import Drone from './components/Drone'
import Plans from './components/Plans'
import Contact from './components/Contact'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/services',
            component: Services
        },
        {
            path: '/drone',
            component: Drone
        },
        {
            path: '/plans',
            component: Plans
        },
        {
            path: '/contact',
            component: Contact
        },

    ],
    mode: "history"
})