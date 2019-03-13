import Vue from 'vue'
import Antd from 'ant-design-vue'
//主题颜色
import './themes/index.less'
import {Dropdown, Button, DropdownMenu, DropdownItem, Tag,Tree,Col,Input,Row,Dialog} from 'element-ui'
import App from './App.vue'
import store from '@/store'
import {router} from "@/router"
import "@/router/routerControl"
Vue.config.productionTip = false
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Tree)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Antd)
new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
