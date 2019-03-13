import { router } from "@/router"
import {getToken} from '@/utils/auth'
import store from "@/store"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

const hasPermission = (roles, permissionRoles) => {
    if (roles.indexOf("admin") !== -1) return true;
    if (!permissionRoles) return true;
    return roles.some(role => permissionRoles.indexOf(role) !== -1);
};
const whiteList = ["/login"];   //可以加入注册页面
router.beforeEach(async (to, from, next) => {
    nprogress.start();
 if(getToken()){ //判断是否有token
     if(to.path === '/login'){
         next({ path: "/" });
         nprogress.done();
     }else{
         // 请求用户信息，通过 roles 动态获取路由
        if(store.getters.roles.length === 0){
            try {
                //获取个人用户信息
                const result = await store.dispatch("getUserInfo");
                // console.log("result-------",result);
                //获取账号的权限
                const {roles} = result;
                await store.dispatch("generateRoutes", roles);
                // 动态新生成的路由表
                router.addRoutes(store.getters.addRouters);
                next({ ...to, replace: true });
            }catch (error) {
                //失败删除本机token
                await store.dispatch("felogout");
                //弹窗出现错误
                // tools.notify({
                //     type: "error",
                //     message: "Verification failed, please login again"
                // });
                next({ path: "/" });
            }

        }else{
            // 如有 roles 则通过与路由 meta 的 roles 判断是否有访问该路由的权限
            if (hasPermission(store.getters.roles, to.meta.roles)) {
                next();
            } else {
                next({ path: "/401", replace: true, query: { noGoBack: true } });
            }
        }
     }
 }else{
     if(whiteList.indexOf(to.path)!==-1){
         //免登录名单直接进入
         next()
     }else{
         next('/login')//否则全部重定向到登录页面
         nprogress.done(); // 如果当前页是 login 则路由不会触发 after 钩子函数，需要手动处理
     }
 }
});
router.afterEach(() => {
    nprogress.done();
});


