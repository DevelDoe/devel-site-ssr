<template>
    <div id="album">
        hello {{ album }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { url } from '../../config'
export default {
    name: 'Album',
    data() {
        return {
            url
        }
    },
    computed: {
        ...mapGetters([ 'album' ]),
    },
    title() {
        return this.album.title
    },
    description() {
        return this.album.summary
    },
    asyncData({ store, route }) {

        let album
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
