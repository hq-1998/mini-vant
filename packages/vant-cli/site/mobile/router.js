import { createRouter, createWebHashHistory } from 'vue-router';
import { demos } from 'site-mobile-shared';
function getRoutes() {
    const routes = [];
    const names = Object.keys(demos);
    console.log(demos)
    import('site-mobile-shared').then(res => {
        console.log(res)
    })
}

export const router = createRouter({
    history: createWebHashHistory(),
    routes: getRoutes()
})