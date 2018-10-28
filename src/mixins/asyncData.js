// export default {
//     beforeMount() {
//         const { asyncData } = this.$options
//         if(asyncData) {
//             asyncData({
//                 store: this.$store,
//                 route: this.$route
//             })
//         }
//     }
// }

export default {
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options
        console.log('asyncData'+ asyncData)
        if(asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(() => {
                next()
            })
        }
        next()
    }
}