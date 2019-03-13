<template>
    <div >
        <nav-bar></nav-bar>
        <div class="flexBox">
            <div class="left">
                <sidebar></sidebar>
            </div>
            <div class="right">
                <tags-view></tags-view>
                <app-main></app-main>
            </div>
        </div>
    </div>
</template>
<script>
    import Sidebar from './sidebar';
    import NavBar from './navbar';
    import TagsView from './tagsview';
    import AppMain from './appmain';


    export default{
        data(){
            return{

            }
        },
        computed:{


        },
        components:{
            Sidebar,
            NavBar,
            TagsView,
            AppMain
        }
    }
</script>
<style lang="less">
    .flexBox{
        display: flex;
    }
    .flexBox>div{
        flex: 1;
    }
</style>