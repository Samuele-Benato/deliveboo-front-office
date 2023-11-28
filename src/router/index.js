import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AdvancedFilterType from "../pages/AdvancedFilterType.vue";

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
      name: "advanced-filter",
      path: "/advanced-filter",
      component: AdvancedFilterType,
    },
  ],
});

export { router };
