import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/components/Home.vue";
import Mudae from "/src/components/Mudae.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/mudae",
      name: "Mudae",
      component: Mudae,
    },
  ],
});

export default router;
