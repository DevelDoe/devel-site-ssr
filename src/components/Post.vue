<template>
    <article class="row" id="post">
        <div class="col">
            <header class="header">
                <h2>{{ post.category }} - {{ post.title }}</h2>
                <div class="meta muted-text">
                    <img v-if="author" :src="url + author.img_src" />
                    <span  v-if="author">{{ author.username }}</span>
                    <span>{{ moment(post.publishedAt).format('DD MMMM')}}</span>
                    <span v-if="post.original"> <a :href="post.original">Orginal</a></span>
                </div>
            </header>

            <section class="summary">
                <h3>Summary</h3>
                <p >{{ post.summary }}</p>
            </section>

            <section class="body">
                <p v-html="md"></p>
            </section>

            <!-- <footer>
                <h4>Author Bio</h4>
                <p>Paragraph in Article's Footer</p>
            </footer> -->
        </div>

    </article>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('css', css)
import html from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', html)
import bash from 'highlight.js/lib/languages/bash'
hljs.registerLanguage('bash', bash)

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
import moment from 'moment'
import { url } from '../../config'
export default {
    name: 'Post',
    data() {
        return {
            moment,
            url: url
        }
    },
    computed: {
        ...mapGetters([ 'post', 'author' ]),
        md() {
            return markdown.render(this.post.body)
        }
    },
    title() {
        return this.post.category + ' ' + this.post.title
    },
    description() {
        return this.post.summary
    },
    asyncData({ store, route }) {
        return store.dispatch('getPost', route.params.id)
    }
}
</script>
