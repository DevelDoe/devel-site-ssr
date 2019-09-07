<template>
    <div id="album">
          <div class="artist">
               <a :href="'/' + artist.username" class="">
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
    name: 'Artist',
    data() {
        return {
            url
        }
    },
    computed: {
        ...mapGetters([ 'artists ', 'artist' ]),
    },
    title() {
        return this.artist.username
    },
    description() {
        return 'artist'
    },
    asyncData({ store, route }) {

        let artist
        let artists
        let ready

        const readyPromise = new Promise(( resolve, reject  ) => {
            ready = resolve
        })

        const update = () => {
            if( artists, artist ) {
                ready()
            }
        }

        store.dispatch( 'getArtists' ).then( () => {
            artists = true 
            update()
        })

        store.dispatch( 'getArtist', route.params.username ).then( () => {
            artist = true 
            update()
        })

        

        return readyPromise
    }
}
</script>
