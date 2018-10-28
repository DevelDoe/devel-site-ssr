<template>
    <div id="app">
        
        <header>
            <h1>Devel SSR Site</h1>
            <p>built with Vue 2.0 + vue-router + vuex, with server-side rendering.</p>
        </header>

        <nav>
            <header>
                <h2>This is the navigation heading</h2>
            </header>
            <ul>
                <li><router-link :to="{ path: '/'}">home</router-link></li>
            </ul>
        </nav>

        <router-view/>

        <aside>

            <h2>Get To Know Us Better</h2>

            <section>
                <h3>Popular Posts</h3>
                <ul>...</ul>
            </section>

            <section>
                <h3>Partners</h3>
                <ul>...</ul>
            </section>

            <section>
                <h3>Testimonials</h3>
                <ul>...</ul>
            </section>

        </aside>

        <footer>
            <ul>
                <li>Copyright</li>
                <li>Social Media Links</li>
            </ul>
        </footer>
        
    </div>
</template>
