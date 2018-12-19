<template>
    <div id="posts">

        <div class="posts">

            <div class="row">
                <div class="col-md-12">
                    
                </div>
            </div>            
            
        </div>


        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import { url } from '../../config'
export default {
    name: 'Posts',
    data() {
        return {
            search: '',
            moment,
            swedish: false,
            english: true,
            caties: [],
            tagies: [],
            url: url
        }
    },
    computed: {
        ...mapGetters([ 'posts', 'authors']),
        featuredPost() {
            // sort posts by date
            const sortedPosts = this.posts.sort((a,b) => moment(b.publishedAt).unix() - moment(a.publishedAt).unix() )
            // filter by language
            let languages
            if ((this.swedish && this.english) || (!this.swedish && !this.english)) languages = sortedPosts
            else if (this.swedish) languages = sortedPosts.filter( post => post.lang === 'sv' )
            else languages = sortedPosts.filter( post => post.lang === 'en' )
            return languages.filter(post => post.feat ).shift()
        },
        filterPosts() {
            // only published posts
            const published = this.posts.filter( post => { return post.published === true })
            // sort posts by date
            const sortedPosts = published.sort((a,b) => moment(b.publishedAt).unix() - moment(a.publishedAt).unix() )
            // remove featured post
            const withoutFeatured = sortedPosts.filter( post => post._id !== this.featuredPost._id )
            // filter by language
            let languages
            if ((this.swedish && this.english) || (!this.swedish && !this.english)) languages = withoutFeatured
            else if (this.swedish) languages = withoutFeatured.filter( post => post.lang === 'sv' )
            else languages = withoutFeatured.filter( post => post.lang === 'en' )
            return languages.filter( post => {
                if(!this.caties.length && !this.tagies.length) return true
                else {
                    let res 
                    
                    res += this.tagies.find( tag => {
                        return post.tags.find( t => {
                            return t.trim() === tag.trim()
                        })
                    })

                    res += this.caties.find( cat => {
                        return post.category === cat
                    })
                    return res
                }
            })
        },
        filterSearch() {
            // filter by search term
            let searchResults = this.filterPosts.filter( post => {
                return post.body.toLowerCase().indexOf( this.search.toLowerCase() ) > -1 || post.title.toLowerCase().indexOf( this.search.toLowerCase() ) > -1 || post.summary.toLowerCase().indexOf( this.search.toLowerCase() ) > -1 || post.tags.indexOf(this.search.toLowerCase()) > -1 ;
            })
            // filter by language
            if (this.swedish && this.english) return searchResults
            else if (this.swedish) return searchResults.filter( post => post.lang === 'sv' )
            else return searchResults.filter( post => post.lang === 'en' )
        },
        categories() {
            let categories = []
            const published = this.posts.filter( post => { return post.published === true })
            const withoutFeatured = published.filter( post => post._id !== this.featuredPost._id )
            let languages
            if ((this.swedish && this.english) || (!this.swedish && !this.english)) languages = withoutFeatured
            else if (this.swedish) languages = withoutFeatured.filter( post => post.lang === 'sv' )
            else languages = withoutFeatured.filter( post => post.lang === 'en' )
            languages.forEach(post => {
                categories.push(post.category)
            })
            return categories.filter((category, index, self) => {
                return self.indexOf(category) === index
            })
        },
        tags() {
            let tags = []
            const published = this.posts.filter( post => { return post.published === true })
            const withoutFeatured = published.filter( post => post._id !== this.featuredPost._id )
            let languages
            if ((this.swedish && this.english) || (!this.swedish && !this.english)) languages = withoutFeatured
            else if (this.swedish) languages = withoutFeatured.filter( post => post.lang === 'sv' )
            else languages = withoutFeatured.filter( post => post.lang === 'en' )
            languages.forEach(post => {
                post.tags.forEach(tag => {
                    tags.push(tag)
                })
                
            })
            return tags.filter((tag, index, self) => {
                return self.indexOf(tag) === index
            })
        }
    },
    methods: {
        author( id ) {
            return this.authors.find(author => author._id === id)
        },
        toggleCategories(cat) {
            if(this.caties.indexOf( cat ) !== -1) this.caties.splice(this.caties.indexOf( cat ), 1)
            else this.caties.push( cat )
            this.$forceUpdate()
        },
        toggleTags(tag) {
            if(this.tagies.indexOf( tag ) !== -1) this.tagies.splice(this.tagies.indexOf( tag ), 1)
            else this.tagies.push( tag )
            this.$forceUpdate()
        }
    },
    title() {
        return 'Index'
    },
    description() {
        return 'Andree DevelDoe Ray, a front end engineer who loves all things HTML, CSS and Javascript. This is my blog.'
    },
    asyncData({ store, route }) {
        let authors 
        let posts 
        let ready 
        const readyPromise = new Promise((resolve, reject) => {
            ready = resolve
        })
        const update = () => {
            if(authors && posts) {
                ready()
            }
        }

        store.dispatch('getAuthors').then(()=>{
            authors = true
            update()
        })
        store.dispatch('getPosts').then(()=>{
            posts = true
            update()
        })
        return readyPromise
    },
    updated() {
        if(this.showSearch)  this.$nextTick(() => this.$refs.search.focus())
    },
    
}
</script>