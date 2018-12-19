import { web_socket, app_name } from '../../config'

const debugSocket = true

if (debugSocket) console.log('---socket.js---')

const getTitle = (vm) => {
    const { title } = vm.$options
    if (title) return typeof title === 'function' ? title.call(vm) : title
}

export default {
    data() {
        return {
            socket: null
        }
    },
    mounted() {
        const title = getTitle(this)
        if(title) {
            var self = this

            this.socket = new WebSocket(web_socket)

            const visitor = {
                type: 'view',
                page: title,
                app: app_name,
                resolution: screen.width + 'x' + screen.height
            }

            if(debugSocket) console.log(visitor)

            this.socket.onopen = () => {
                this.socket.send(JSON.stringify(visitor))
            }

            /**
             * HTML5 hidden
             * id user is not lookin at page
             */
            var hidden, visibilityChange;
            if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }
            function handleVisibilityChange() {
                if (document[hidden]) {
                    self.socket.send(JSON.stringify({ type:'endview'}))
                    self.socket.close()
                } else {
                    self.$router.go()
                }
            }
            document.addEventListener(visibilityChange, handleVisibilityChange, false)
        }
    },
    destroyed() {
        if (title) {
            this.socket.send(JSON.stringify({ type:'endview'}))
            this.socket.close()
        }
    },
}