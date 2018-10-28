import axios from 'axios'

export const getPosts = ({ commit }) => {
    return axios.get('https://jsonplaceholder.typicode.com/todos').then( res => {
        commit('setPosts', res.data)
    }).catch(err => {
        
    })
}
export const getPost = ({ commit }, id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then( res => {
        commit('setPost', res.data)
    }).catch(err => {
        
    })
}