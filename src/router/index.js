import Vue from 'vue'
import Router from 'vue-router'

const Posts = () => import('../components/Posts')
const Post = () => import('../components/Post')

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
                name: 'post'
            }
        ]
    })
}