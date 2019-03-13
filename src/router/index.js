/**
 * Created by lenovo on 2019/3/6.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/layout';
import Login from '@/views/login';
import Home from '@/views/home';
import ErrorPage from '@/views/errorPage';
import ErrorAdmin from '@/views/erroradmin';
Vue.use(VueRouter);
export const constantRouterMap = [
    {
        path: '/404',
        component:ErrorPage,
        hidden: true
    },
    {
        path: '/401',
        component:ErrorAdmin,
        hidden: true
    },
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: 'home',
        children: [
            {
                name: 'home',
                path: 'home',
                component: Home,
                noCache: true,
                roles: ["zhangxin","admin"],
                meta:{
                    title:'首页',
                    icon: "",
                }
            }
        ]
    }
]

export const router = new VueRouter({
    routes: constantRouterMap,
    scrollBehavior: () => ({ y: 0 })
});