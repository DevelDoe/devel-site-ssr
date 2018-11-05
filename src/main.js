import { createApp } from './app'

const { app, store, moment } = createApp()

if(window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app')  