import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../components/MainPage.vue'
import FormA from '../components/formA.vue'
import App from  '../App.vue'

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/putns/:id",
        component: FormA
      },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
