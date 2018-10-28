import Vue from 'vue'
import Router from 'vue-router'

import Posts from '../components/Posts'
import Post from '../components/Post'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Posts
            },
            {
                path: '/post/:id',
                component: Post,
            }
        ]
    })
}