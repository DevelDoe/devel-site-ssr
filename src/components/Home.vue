<template>
    <div id="home">            
        <div class="album" v-for="(album, i) in albums" :key="'album'+i" >
            <router-link :to="{ name: 'album', query: { id: album._id } }" >
                <div class="artist">
                    <img :src=" url + album.artist_img" alt="">
                    <h3 >{{ album.artist }}</h3>
                </div>

                <div class='img'>
                    <div class="screen">
                        <div class="cover"  :style="'background: url('+ url + album.images[0] +'); background-size: cover; background-position: 50% 50%'" :title="album.title"></div>
                    </div>
                    <h2 class=title>{{album.title}}</h2>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { url } from '../../config'
export default {
    name: 'Albums',
    data() {
        return {
            url
        }
    },
    computed: {
        ...mapGetters([ 'artists', 'albums' ]),
    },
    methods: {
    },
    title() {
        return 'Home'
    },
    description() {
        return 'Aquar is a platform for artists to showcase and sell their art.'
    },
    asyncData({ store, route }) {
            
        let artists
        let albums
        let ready

        const readyPromise = new Promise(( resolve, reject  ) => {
            ready = resolve
        })

        const update = () => {
            if( artists, albums ) {
                ready()
            }
        }

        store.dispatch( 'getArtists' ).then( () => {
            artists = true 
            update()
        })

        store.dispatch( 'getAlbums' ).then( () => {
            albums = true 
            update()
        })

        return readyPromise
    }
}
</script>