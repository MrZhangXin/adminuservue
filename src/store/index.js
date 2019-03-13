import Vue from "vue";
import Vuex from "vuex"
import user from "./modules/user"
import permission from "./modules/permission"
import tagsView from './modules/tagsView'
import getters from './getters'
import app from './modules/app'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user, //个人登录
        permission,//  route列表获取
        app, //获取页面头部
        tagsView//虚拟tabs头部
    },
    getters,
    strict: false
});

export default store;