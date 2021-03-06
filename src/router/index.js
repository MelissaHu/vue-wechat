import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['../components/chat/index'], resolve)
    }]
})