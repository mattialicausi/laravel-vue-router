import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AboutPage from './pages/AboutPage.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path:'/project/:slug',
            name: 'single-project',
            component: SingleProject

        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound
        }
    ]
});

export { router };