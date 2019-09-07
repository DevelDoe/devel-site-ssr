import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home')
const Album = () => import('../components/Album')
const Artist = () => import('../components/Artist')

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home
            }, {
                path: '/album/:id',
                component: Album,
                name: 'album'
            }, {
                path: '/:username',
                component: Artist,
                name: 'artist'
            }
        ]
    })
}