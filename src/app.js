import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

import style from './assets/scss/root.scss'

import title from './mixins/title'
Vue.mixin(title) 
import asyncData from './mixins/asyncData'
Vue.mixin(asyncData)

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

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