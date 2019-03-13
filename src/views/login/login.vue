<template>
    <div>
        <input type="text">
        <input type="password">
        <button @click="show">点击登录</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            async show(){
                const response =await this.$store.dispatch('loginbyUser', {
                    username: "zhangxin",
                    password: "123"
                })
                if(response.resultCode === "000000"){
                    //加载loading消失
//                    this.$router.push({ path: '/' })
                }else{
                    //失败的弹窗消息
                }
            }
        }

    }
</script>
<style>

</style>