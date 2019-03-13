import Layout from '@/views/layout'
import Test from '@/views/test'
import Test1 from '@/views/test1'
import Tree from '@/views/tree'
import Page1 from '@/views/page1'
import Table from '@/views/table'
export const asyncRouterMap = [
    {
        path: '/permission',
        component: Layout,
        meta: {
            title: "permission"
        },
        children: [
            {
                path: 'test',
                component: Test,
                name: 'test',
                meta: {
                    title: '权限测试页',
                    roles: ["admin", "super_editor"]
                }  //页面需要的权限
            },
            {
                path: 'test2',
                component: Test1,
                name: 'test2',
                meta: {
                    title: 'test2',
                    roles: [
                        'zhangxin',
                        'super_editor',
                        '1'
                    ]
                }
            },
            {
                path: 'test3',
                component: Test1,
                name: 'test3',
                meta: {
                    title: 'test3',
                    roles: [
                        'zhangxin',
                        'super_editor',
                        '2'
                    ]
                }
            }
        ]
    },
    {
        path: '/tree',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'tree',
                component: Tree,
                meta: {
                    title: '树形',
                    icon: '',
                    roles:[]
                }
            }
        ]
    },
    {
        path: '/page',
        component: Layout,
        meta: {
            title: "page"
        },
        children: [
            {
                path: 'page1',
                name: 'page1',
                component: Page1,
                meta: {
                    title: 'page1',
                    roles: [
                        'zhangxin',
                        'super_editor'
                    ],
                    icon: '',
                }
            }
        ]
    },
    {
        path: '/table',
        component: Layout,
        children:[
            {
                path: 'index',
                component:Table,
                name: 'table',
                meta:{
                    title:'导入导出表格',
                    roles: [
                        'zhangxin',
                        'super_editor'
                    ],
                    icon: '',
                }
            }
        ]
    },
    {path: '*', redirect: '/404', hidden: true}
];