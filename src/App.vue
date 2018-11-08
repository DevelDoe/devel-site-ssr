<template>
    <div id="app" class="container-fluid">

        

        <header class="row headeri">
            <h1><a href="/" class="">log.develdevils</a></h1>
        </header>
        

        <transition name="fade" mode="out-in" >
        <router-view/>
        </transition>

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

