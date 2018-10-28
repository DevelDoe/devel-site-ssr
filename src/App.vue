<template>
    <div id="app" class="container-fluid">

        

        <header class="row header">
            <h1><a href="/" class="">log.develdevils</a></h1>
        </header>
        

        <transition name="fade" mode="out-in" >
        <router-view/>
        </transition>

    
        <footer>
            <ul>
                <li>ĕn-jĕnˈdər by DevelDoe | </li>
                <li><a href="https://www.facebook.com/develdoe"> facebook</a> | </li>
                <li><a href="https://www.github.com/develdoe"> github</a> | </li>
                <li><a href="https://www.instagram.com/develdoe"> instagram</a> | </li>
                <li><a href="http://andreeray.se"> andreeray.se</a></li>
            </ul>
        </footer>
        
    </div>
</template>

<style lang="scss">
#app {
    
    .header {
        padding: 10px;
        margin-bottom: 15px;

        h1 {
            padding: 0;
            margin:0;
            font-size: 1rem;
        }
    }
    footer {
        li {
            float: left;
        }
    }
}
</style>
