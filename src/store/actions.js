import axios from 'axios'
import config from '../../config'

export const getPosts = ({ commit }) => {
    return axios.get(`${config.api_url}/posts`).then( res => {
        commit('setPosts', res.data)
    }).catch(err => {
        console.log(err)
    })
}
export const getPost = ({ commit }, id) => {
    return axios.get(`${config.api_url}/post/?id=${id}`).then( res => {
        commit('setPost', res.data)
    }).catch(err => {
        console.log(err)
    })
}
export const getAuthors = ({ commit }) => {
    return axios.get(`${config.api_url}/authors`).then( res => {
        commit('setAuthors', res.data)
    }).catch( err => {
        console.log(err)
    })
}