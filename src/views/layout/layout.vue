<template>
       <div class="layout">
           <nav-bar></nav-bar>
           <div class="flexBox">
               <div class="left">
                   <sidebar></sidebar>
               </div>
               <div class="right">
                   <div class="tags">
                       <tags-view></tags-view>
                   </div>
                   <div style="height: 42px;"></div>
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
    .layout{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    a{
        text-decoration: none;
    }
    .flexBox{
        max-width: 1920px;
        height: 100%;
        position: relative;
    }

    .flexBox>.left{
       width: 190px;
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        z-index: 999999;
    }
    .flexBox>.right{
        background-color: #F3F6FB;
        padding-left: 190px;
        height: 100%;
        position: relative;
    }
    .tags{
        position: absolute;
        padding-left: 190px;
        top: 0;
        left: 0;
        width: 100%;
    }
    .el-tag .el-icon-close{
        color: #000000;
    }
    .el-tag-active .el-icon-close{
        color: #ffffff;
    }
</style>
