import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home-item',
        component: () => import('@/views/Home'), // 동적 import
    },
    {
        path: '/test',
        name: 'test-new',
        component: () => import('@/views/test-new'),
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
