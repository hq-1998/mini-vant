import { createRouter, createWebHashHistory } from 'vue-router';
import { demos } from 'site-mobile-shared';

function getRoutes() {
    const routes = [];
    const names = Object.keys(demos);
}

export const router = createRouter({
    history: createWebHashHistory(),
    routes: getRoutes();
})