import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RestaurantMenu from "../pages/RestaurantMenu.vue";

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
      component: RestaurantMenu,
    },
  ],
});

export { router };
