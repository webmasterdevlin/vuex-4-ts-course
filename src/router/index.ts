import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",
      },
      component: Home,
    },
    {
      path: "/heroes",
      name: "heroes",
      meta: {
        title: "Heroes",
      },
      component: () => import("../views/Heroes.vue"),
    },
    {
      path: "/anti-heroes",
      name: "anti-heroes",
      meta: {
        title: "Anti-Heroes",
      },
      component: () => import("../views/AntiHeroes.vue"),
    },
  ],
});
