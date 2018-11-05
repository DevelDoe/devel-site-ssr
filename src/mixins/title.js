function getTitle(vm) {
    const { title } = vm.$options
    if(title) {
        return typeof title === 'function' ? title.call(vm) : title
    }
}
function getDescription(vm) {
    const { description } = vm.$options 
    if(description) {
        return typeof description === 'function' ? description.call(vm) : description
    }
}
const serverTitleMixin = {
    created() {
        const title = getTitle(this)
        const description = getDescription(this)
        if(title) {
            this.$ssrContext.title = `log.develdevils | ${title}`
        }
        if(description) {
            this.$ssrContext.description = `${description}`
        }
    }
}

const clientTitleMixin = {
    mounted() {
        const title = getTitle(this)
        const description = getDescription(this)
        if (title) {
            document.title = `log.develdevils | ${title}`
        }
        if (description) {
            document.description = `${description}`
        }
    }
}

export default process.env.VUE_ENV === 'server' ? serverTitleMixin : clientTitleMixin