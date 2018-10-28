import axios from 'axios'
import config from '../../config'

export const getPosts = ({ commit }) => {
    return axios.get(`${config.api_url}`).then( res => {
        commit('setPosts', res.data)
    }).catch(err => {
        console.log(err)
    })
}