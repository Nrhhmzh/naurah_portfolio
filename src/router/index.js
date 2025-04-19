import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layouts/Layout.vue';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Experience  from '@/pages/Experience.vue';
import Project from '@/pages/Project.vue';
import Education from '@/pages/Education.vue';

const routes = [
    {
        path: '/', // Base path
        component: Layout, 
        children: [
            { path: '/', component: Home },
            { path: '/about', component: About },
            { path: '/experience', component: Experience },
            { path: '/project', component: Project },
            { path: '/education', component: Education },
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router