import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RestaurantMenu from "../pages/RestaurantMenu.vue";
import Cart from "../components/views/Cart.vue";

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

    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
  ],
});

export { router };
