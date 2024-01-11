import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import MenuPage from "../pages/MenuPage.vue";
import CartPage from "../pages/CartPage.vue";
import OrderPage from "../pages/OrderPage.vue";
import PaymentPage from "../pages/PaymentPage.vue";
import ThanksPage from "../pages/ThanksPage.vue";

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
      component: CartPage,
    },

    {
      path: "/payment-form",
      name: "payment-form",
      component: OrderPage,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentPage,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: ThanksPage,
    },
  ],
});

export { router };
