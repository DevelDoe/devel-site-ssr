import axios from 'axios'
import {api_url} from '../../config'

export const getPosts = ({ commit }) => {
    return axios.get(`${api_url}/posts`).then( res => {
        commit('setPosts', res.data)
    }).catch(err => {
        console.log(err)
    })
}
export const getPost = ({ commit }, id) => {

    return axios.get(`${api_url}/post/?id=${id}`).then( p => {
        return axios.get(`${api_url}/author/?id=${p.data.user_id}`).then(a => {
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
    return axios.get(`${api_url}/authors`).then( res => {
        commit('setAuthors', res.data)
    }).catch( err => {
        console.log(err)
    })
}