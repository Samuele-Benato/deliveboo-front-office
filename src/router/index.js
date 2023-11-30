import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FilterType from "../components/homepage/FilterType.vue";

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
      component: FilterType,
    },
  ],
});

export { router };
