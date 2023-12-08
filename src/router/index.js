import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../components/MainPage.vue'
import Putns from '../components/putns.vue'
import Saraksts from  '../components/Saraksts.vue'
import Spele from  '../components/Spele.vue'
import PutnsDynamic from '../components/putnsDynamic.vue'

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/putns/:id",
        component:  Putns,
        meta: { transition: 'fade' }
      },

      {
        path: "/saraksts",
        component: Saraksts
      },
      {
        path: "/spele",
        component: Spele
      },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
