import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import RestaurantMenu from "../pages/RestaurantMenu.vue";

// import FilterType from "../components/homepage/FilterType.vue";
import PlateList from "../components/plates/PlateList.vue";

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
    //   {
    //     name : 'restaurant-menu',
    //     path: '/restaurant/:id',
    //     component: RestaurantMenu,
    //  },

    {
      name: "advanced-filter",
      path: "/advanced-filter",
      component: FilterType,
    },

    {
      name: "plates-by-restaurant",
      path: "/plates-by-restaurant/:restaurantId",
      component: PlateList,
    },
  ],
});

export { router };
