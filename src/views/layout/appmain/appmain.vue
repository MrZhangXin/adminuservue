<template>
     <div class="main">
        <el-scrollbar style="height:100%">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </el-scrollbar>
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
    .main{
        margin-left: 10px;
        margin-right: 10px;
        max-width: 100%;
        height: 82%;
        background-color: #ffffff;
        overflow: hidden;
    }
    .el-scrollbar__wrap{
        overflow-x: hidden;
    }
</style>
