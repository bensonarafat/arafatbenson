import * as VueRouter from 'vue-router';

import MainPage from './pages/main.vue';
import ArchivePage from './pages/archive.vue';


const routes = [
    { 
        path: '/',
        component: MainPage,
        name: 'Home',
    },
    { 
        path: '/archive', 
        component: ArchivePage, 
        name: "Archive",
    },
  ]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes, 
    scrollBehavior  () {
      return { top: 0, behavior: 'smooth', }
    }
  })
 
export default router;