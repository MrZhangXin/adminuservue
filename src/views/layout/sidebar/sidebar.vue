<template>
    <div>
        <ul>
            <sidebar-item :routes="permission_routers"></sidebar-item>
        </ul>
        <!-- 一级菜单 -->
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import SidebarItem from './sidebar-item.vue';
    export default{
        data(){
            return {}
        },
        methods: {

        },
        components:{
            SidebarItem
        },
        computed:{
            ...mapGetters(["sidebar", "permission_routers"]),
        }
    }
</script>
<style>

</style>