import * as config from '../config'
import Cookies from "js-cookie"
const TokenKey = "edentoken"

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token,{ expires: config.cookieExpires || 1 });
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}