import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";

const router = createRouter({
  // aggiungi history
  history: createWebHistory(),
  // aggiungi routes
  routes: [
    {
      name: "home",
      path: "/",
      component: HomePage,
    },

    {
      name: "plates-by-restaurant",
      path: "/plates-by-restaurant/:restaurantId",
      component: MenuPage,
    },
  ],
});

export { router };
