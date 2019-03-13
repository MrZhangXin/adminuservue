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
                    role: [
                        'zhangxin',
                        'super_editor'
                    ]
                }
            },
            {
                path: 'test3',
                component: Test1,
                name: 'test3',
                meta: {
                    title: 'test3',
                    role: [
                        'zhangxin',
                        'super_editor'
                    ]
                }
            }
        ]
    },
    {
        path: '/tree',
        component: Layout,
        meta: {
            title: "tree"
        },
        children: [
            {
                path: 'index',
                name: 'tree',
                component: Tree,
                meta: {
                    title: '树形',
                    icon: ''
                }
            }
        ]
    },
    {
        path: '/page',
        component: Layout,
        meta: {
            title: 'page',
            icon: 'comp'
        },
        children: [
            {
                path: 'page1',
                name: 'page1',
                component: Page1,
                meta: {
                    title: 'page1',
                    role: [
                        'zhangxin',
                        'super_editor'
                    ],
                    icon: '',
                }
            },
            {
                path: 'page2',
                name: 'page2',
                component: Page1,
                meta: {
                    title: 'page2',
                    role: [
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
        meta: {
            title: "表格"
        },
        children:[
            {
                path: 'index',
                component:Table,
                name: 'table',
                meta:{
                    title:'导入导出表格',
                    role: [
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