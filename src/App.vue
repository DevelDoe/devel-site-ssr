<template>
    <div id="app" class="container-fluid">

        

        <header class="row headeri">
            <h1><a href="/" class="">log.develdevils</a></h1>
        </header>
        

        <transition name="fade" mode="out-in" >
        <router-view/>
        </transition>

        <footer >
            <div class="row" >
                <div class="col-md-6">
                    <h1>log.develdevils.se</h1>
                    <h4>//** ABOUT */</h4>
                    <p>
                        Welcome! Ny name is Andree Ray, aka DevelDoe, a HTML, CSS and JavaScript ninja @DevelDevils. This applications is built with Vue and Server Side Rendering. Vue is a modular JavaScript library that encapsulat components that manages their own state. 
                        My main purpose for this site is just as a content bin for whatever I am looking in to at the moment. If you like to get in touch, please contact me by <a href="mailto:me@andreeray.se" target="_top">email</a>.<br> 
                        Many best wishes / Andree "DevelDoe" Ray.
                    </p>
                </div>
            </div>
            
        </footer>

        <div id="sticky">
            <a id="top">scroll top</a>
        </div>
        
    </div>
</template>

<script>
export default {
    mounted() {
        var sticky = document.getElementById("top")
        var searchInput = document.getElementById("searchInput")

        function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll)
                window.scrollTo (0,currentScroll - (currentScroll/5))
            }
        }
        
        
        sticky.onclick = function() { smoothscroll() }
        
        window.onscroll = () => {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 300) {
                sticky.classList.add("display");
            } else {
                sticky.classList.remove("display");
            }
        }
        
    }
}
</script>

