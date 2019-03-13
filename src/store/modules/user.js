import { setToken, removeToken } from "@/utils/auth";
import api from '@/api/user';
import Cookies from "js-cookie";
import * as types from "../types";
const user = {
    state: {
        token: "",
        roles: [],
        name: "",
        avatar: "",
        introduction: ""
    },
    mutations:{
        [types.SET_TOKEN]: (state, token) => {
            state.token = token;
        },
        [types.SET_TOKEN]: (state, token) => {
            state.token = token;
        },
        [types.SET_ROLES]: (state, roles) => {
            state.roles = roles;
        },
        [types.SET_INTRODUCTION]: (state, introduction) => {
            state.introduction = introduction;
        },
        [types.SET_NAME]: (state, name) => {
            state.name = name;
        },
        [types.SET_AVATAR]: (state, avatar) => {
            state.avatar = avatar;
        }
    },
    actions:{
        //登录调用
        async loginbyUser({commit,state},{name,password}){
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await api.login(name, password);
                    if (response.resultCode == '000000') {
                        commit(types.SET_TOKEN, response.token);
                        //存储是token 与 username
                        setToken(response.token);
                        Cookies.set("user", name);
                    }
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            })

        },
        //失败的时候调用
        felogout({ commit }) {
            return new Promise(resolve => {
                commit(types.SET_TOKEN, "");
                removeToken();
                resolve();
            });
        },
        //获取用户信息调用
        getUserInfo({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    //获取userinfo相关信息
                    const response = await api.userInfo(Cookies.get("user"));
                    //获取到的信息对号入座
                    const { roles, name, avatar, introduction } = response;
                    //获取到的信息保存
                    commit(types.SET_ROLES, roles);
                    commit(types.SET_NAME, name);
                    commit(types.SET_AVATAR, avatar);
                    commit(types.SET_INTRODUCTION, introduction);
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            });
        }

    }
}

export default user;