<template>
    <div id="app" class="container-fluid">

        

        <header class="row headeri">
            <h1><a href="/" class="">log.develdevils</a></h1>
        </header>
        

        <transition name="fade" mode="out-in" >
        <router-view/>
        </transition>

        
    </div>
</template>

<style lang="scss">

</style>
