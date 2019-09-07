import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

import style from './assets/scss/root.scss'

import asyncData from './mixins/asyncData'
Vue.mixin(asyncData)

import title from './mixins/title'
Vue.mixin(title)

import view from './mixins/view'
Vue.mixin(view)

export function createApp() {
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return { app, router, store }
}