import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Главная",
      component: HomeView,
    },
    {
      path: "/delivery",
      name: "Доставка",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/payment",
      name: "Оплата",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/contacts",
      name: "Контакты",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "О галерее",
      component: () => import("./views/HomeView.vue"),
    },
  ],
});

export default router;
