<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style>
    .fade-enter-active,.fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>