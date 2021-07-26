import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue'),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import('../views/Projects.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;