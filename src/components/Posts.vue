<template>

    <div>
        <div class="post" v-for="(post, i) in posts" :key="i">
            <router-link :to="{path:'/post/' + post.id}"><h3>{{ post.title }}</h3></router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'posts' ])
    },
    methods: {
        ...mapActions([ 'getPosts' ])
    },
    title() {
        return 'Home'
    },
    asyncData({ store, route }) {
        return store.dispatch('getPosts')
    }
}
</script>
