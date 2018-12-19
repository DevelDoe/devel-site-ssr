import axios from 'axios'
import {url} from '../../config'

export const getPosts = ({ commit }) => {
    return axios.get(`${url}/public/posts`).then( res => {
        commit('setPosts', res.data)
    }).catch(err => {
        console.log(err)
    })
}
export const getPost = ({ commit }, id) => {

    return axios.get(`${url}/public/post/?id=${id}`).then( p => {
        return axios.get(`${url}/public/author/?id=${p.data.user_id}`).then(a => {
            commit('setPost', p.data)
            commit('setAuthor', a.data)
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })

}
export const getAuthors = ({ commit }) => {
    return axios.get(`${url}/public/authors`).then( res => {
        commit('setAuthors', res.data)
    }).catch( err => {
        console.log(err)
    })
}