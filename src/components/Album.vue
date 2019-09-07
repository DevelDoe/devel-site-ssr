<template>
    <div id="album">
        <div class="info">
            <h2>{{album.title}}</h2>
            <p>{{album.summary}}</p>
        </div>
        <div class="image" v-for='(image, i) in album.images' :key='"image"+i'>
            <img :src="url+image" alt="">
        </div>

        <div class="artist">
            <a :href="'/' + artist.username" >
                <img :src=" url + artist.img_src" alt="">
                <h3 >{{ artist.username }}</h3>
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { url } from '../../config'
export default {
    name: 'Album',
    data() {
        return {
            url
        }
    },
    computed: {
        ...mapGetters([ 'artists ', 'album', 'artist' ]),
    },
    title() {
        return this.album.title
    },
    description() {
        if(this.album.summary && this.album.summary !== '') return this.album.summary
        else return ''
    },
    asyncData({ store, route }) {

        let album
        let artists
        let ready

        const readyPromise = new Promise(( resolve, reject  ) => {
            ready = resolve
        })

        const update = () => {
            if( artists, album ) {
                ready()
            }
        }

        store.dispatch( 'getArtists' ).then( () => {
            artists = true 
            update()
        })

        store.dispatch( 'getAlbum', route.params.id ).then( () => {
            album = true 
            update()
        })

        

        return readyPromise
    }
}
</script>
