import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import MenuPage from "../pages/MenuPage.vue";
import Cart from "../components/views/Cart.vue";
import FormOrder from "../pages/OrderFormPage.vue";

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
      name: "about",
      path: "/about",
      component: AboutPage,
    },
    {
      name: "plates-by-restaurant",
      path: "/plates-by-restaurant/:restaurantId",
      component: MenuPage,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/order-form",
      name: "order-form",
      component: FormOrder,
    },
  ],
});

export { router };
