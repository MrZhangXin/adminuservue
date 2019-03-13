<template>
    <div class="sidebar-wrapper">
        <template v-for="item in routes" v-if="!item.hidden && item.children">
            <template v-if="!item.hidden && item.children">
                <!--  单级 -->
                <li v-if="onlyOneShowingChildren(item.children) &&
          !item.children[0].children &&
          !item.alwaysShow" :key="item.children[0].name" class="sidebar-title-wrapper">
                    <router-link
                            :to="item.path+'/'+item.children[0].path"
                            :key="item.children[0].name"
                    >
                        <span v-if="item.children[0].meta && item.children[0].meta.title">
                        {{item.children[0].meta.title}}
                        </span>

                    </router-link>
                </li>
                <!--  一级菜单  -->
                <li v-else :key="item.name" :index="item.name || item.path" class="sidebar-title-wrapper">
                    <!--  一级图标  -->
                    <!--

                            <icon
                        v-if="item.meta && item.meta.icon"
                        :name="item.meta.icon"
                        :scale="2">
                      </icon>

                    -->
                    <span v-if="item.meta && item.meta.title">
                        {{item.meta.title}}
                    </span>
                    <ul class="sidebar-item-wrapper">
                        <template v-for="child in item.children">
                            <!-- 二级菜单 -->
                            <template v-if="!child.hidden">
                                <sidebar-item v-if="child.children && child.children.length > 0"
                                              :routes="[child]"
                                              :key="child.path"></sidebar-item>
                                <li v-else
                                    :key="child.name">
                                    <router-link
                                            :to="item.path+'/'+child.path"
                                            :key="child.name"
                                    >
                                        <!-- 图标 -->
                                        <!--
                                             <icon
                                                v-if="child.meta && child.meta.icon"
                                                :name="child.meta.icon"
                                                :scale="2">
                                              </icon>
                                        -->
                                        <span v-if="child.meta && child.meta.title">
                                            {{child.meta.title}}
                                      </span>
                                    </router-link>
                                </li>
                            </template>
                        </template>
                    </ul>
                </li>
            </template>
        </template>
    </div>
</template>
<script>
    export default{
        name: 'SidebarItem',
        data(){
            return {}
        },
        props: {
            routes: {
                type: Array
            }
        },
        methods: {
            onlyOneShowingChildren(children) {
                return children.filter(item => !item.hidden).length === 1
            },
            getTitle(title) {
                //控制图标的缩小
                return title
            }
        }
    }
</script>
<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar-wrapper {
        position: relative;
    }

    .sidebar-title-wrapper {
        width: 380px;
        line-height: 60px;
        text-align: center;

    }

    .sidebar-item-wrapper {
        display: none;
        position: absolute;
        width: 300px;
        left: 380px;
        top: 0;
        height: 100%;

    }

    .sidebar-title-wrapper:hover {
        background-color: darkgray;
    }

    .sidebar-title-wrapper:hover > .sidebar-item-wrapper {
        display: block;
    }


</style>