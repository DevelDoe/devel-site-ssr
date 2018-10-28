<template>
    <article>
        <header>
            <h1>{{ post.title }}</h1>
            <h2>Subtitle of Article</h2>
        </header>

        <section>
            <h3>First Logical Part (e.g. "Theory")</h3>
            <p>Paragraph 1 in first section</p>

            <h4>Some Other Subheading in First Section</h4>
            <p>Paragraph 2 in first section</p>
        </section>

        <section>
            <h3>Second Logical Part (e.g. "Practice")</h3>
            <p>Paragraph 1 in second section</p>
            <p>Paragraph 2 in second section</p>
        </section>

        <footer>
            <h4>Author Bio</h4>
            <p>Paragraph in Article's Footer</p>
        </footer>

    </article>
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

