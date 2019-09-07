<template>
    <div id="home">            
        <div class="album" v-for="(album, i) in filterAlbum" :key="'album'+i" >
                
                <a :href="'/' + album.artist" >
                    <div class="artist">
                        <img :src=" url + album.artist_img" alt="">
                        <h3 >{{ album.artist }}</h3>
                    </div>
                </a>
                <a :href="'/album/' + album._id" >
                    <div class='img'>
                        <div class="screen">
                            <div class="cover" :ref="album._id" :style="'background: url('+ url + album.images[0] +'); background-size: cover; background-position: 50% 50%'"></div>
                        </div>
                        <h2 class=title @mouseover="addClass(album._id)" @mouseleave="removeClass(album._id)">{{album.title}}</h2>
                    </div>
                </a>
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
        filterAlbum() {
            return this.albums.sort((a,b) => b.createdAt - a.createdAt)
        }
    },
    methods: {
        addClass(cover) {
            this.$refs[cover][0].classList.add("active")
        },
        removeClass(cover) {
            this.$refs[cover][0].classList.remove("active");
        }
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