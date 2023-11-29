import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../components/MainPage.vue'
import Putns from '../components/putns.vue'
import Saraksts from  '../components/Saraksts.vue'
import PutnsDynamic from '../components/putnsDynamic.vue'

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/putns/:id",
        component:  Putns 
      },

      {
        path: "/saraksts",
        component: Saraksts
      },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
