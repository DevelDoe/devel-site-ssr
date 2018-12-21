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

export const getArtists = ({ commit }) => {
    return axios.get(`${url}/public/artists`).then( res => {
        commit('setArtists', res.data)
    }).catch( err => {
        console.log(err)
    })
}

export const getAlbums  =  ({ commit }) => {
    return axios.get( `${url}/public/albums` ).then( res => {
        commit( 'setAlbums', res.data )
    }).catch( err => {
        console.log(err)
    })
}

export const getAlbum  =  ({ commit }, id) => {
    return axios.get(`${url}/public/album/?id=${id}`).then(res => {
        console.log(res.data)
        commit( 'setAlbum', res.data )
    }).catch( err => {
        console.log(err)
    })
}
