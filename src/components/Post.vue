<template>
    <article class="row" id="post">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <header>
                <h2>{{ post.category }} - {{ post.title }}</h2>
                <small v-if="post.original"> <a :href="post.original">Orginal article</a> </small>
            </header>

            <section class="summary">
                <p >{{ post.summary }}</p>
            </section>

            <section>
                <p v-html="md"></p>
            </section>

            <footer>
                <!-- <h4>Author Bio</h4>
                <p>Paragraph in Article's Footer</p> -->
            </footer>
        </div>
    
    </article>
</template>

<script>
const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
})
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'post' ]),
        md() {
            return markdown.render(this.post.body)
        }
    },
    methods: {
        ...mapActions([ 'getPost' ])
    },
    title() {
        return this.post.category + ' ' + this.post.title
    },
    asyncData({ store, route }) {
        return store.dispatch('getPost', route.params.id)
    }
}
</script>

<style lang="scss">
#post {

     p {

        margin: 20px 0;
    }
    
    .summary{
        padding: 0 15px;
        p {
            padding: 0 ;
            color: #666;
            font-size: 1.7em;
            margin-bottom: 0;
            margin: 20px 0;
        }
    }
}
</style>

