import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'), // 동적 import
    },
    {
        path: '/test',
        name: 'test-new',
        component: () => import('@/views/test-new'),
    },
    {
        path: '/header',
        name: 'Header',
        component: () => import('@/components/layout/Header'),
    },
    {
        path: '/login',
        name: 'Login-item',
        component: () => import('@/views/Login'),
    },
    {
        path: '/hello',
        name: 'Hello-item',
        component: () => import('@/views/Hello'),
    },
    {
        path: '/board/list',
        name: 'List',
        component: () => import('@/components/board/List'),
    },
    {
        path:'/board/write',
        name:'Write',
        component: () => import('@/components/board/Write'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

/*
export const router = createRouter({
    history: createWebHistory(),
    routes,
});*/
