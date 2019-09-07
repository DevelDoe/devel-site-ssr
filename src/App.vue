<template>
    <div id="app" class="container-fluid">

        <header class="row header" >
            <div class="inner">
                <a href='/'><h1>{{ app_name }}</h1></a>
                <input type="text" v-model='search' placeholder='search #artists'/>
                <div class="search" v-if='search && filterArtists.length'>
                    <ul>
                        <li v-for='(artis, i) in filterArtists' :key="'artist'+i"><a :href="'/' + artis.username" >{{artis.username}}</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="content">
            <transition name="fade" mode="out-in" >
                <router-view /> 
            </transition>
        </div>

    </div>
    
</template>

<script>
import {web_socket} from '../config'
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters([ 'app_name', 'artists' ]),
        filterArtists() {
            return this.artists.filter( artist => {
                return artist.username.toLowerCase().indexOf( this.search.toLowerCase().trim()) > -1
            })
        }
    },
    asyncData({ store, route }) {
            
        let artists
        let ready

        const readyPromise = new Promise(( resolve, reject  ) => {
            ready = resolve
        })

        const update = () => {
            if( artists ) {
                ready()
            }
        }

        store.dispatch( 'getArtists' ).then( () => {
            artists = true
            update()
        })

        return readyPromise
    }
}
</script>

