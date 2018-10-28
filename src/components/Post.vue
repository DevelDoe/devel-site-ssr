<template>
    <div>
        <h3>{{ post.title }}</h3>
        <a href="#" @click.prevent="nextPost">Next post</a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'post' ])
    },
    methods: {
        ...mapActions([ 'getPost' ]),
        nextPost() {
            // this.getPost(parseInt(this.post.id) + 1)
            this.$router.push({ params: { id: parseInt(this.$route.params.id) + 1 } })
        }
    },
    title() {
        return 'Home'
    },
    asyncData({ store, route }) {
        return store.dispatch('getPost', route.params.id)
    }
}
</script>

