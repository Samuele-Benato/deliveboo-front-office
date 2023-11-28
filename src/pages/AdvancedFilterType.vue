<script>
import axios from "axios";
import { store } from "../data/store";

import RestaurantCard from "../components/restaurants/RestaurantCard.vue";

export default {
  data() {
    return {
      filteredRestaurants: [],
      types: [],
    };
  },

  computed: {
    activeFilters() {
      const activeTypes = [];

      this.types.forEach((type) => {
        if (type.active) activeTypes.push(type.id);
      });

      return {
        activeTypes,
      };
    },
  },

  components: { RestaurantCard },

  methods: {
    /* NON TROVA LA PAGINA
   fetchGetRestaurants() {
      axios
        .post(
          store.api.baseUrl + "get-restaurants-by-filters",
          this.activeFilters
        )
        .then((response) => {
          this.filteredRestaurants = response.data.data;
        });
    },*/

    fetchTypes() {
      axios.get(store.api.baseUrl + "types").then((response) => {
        this.types = response.data.map((type) => {
          return {
            ...type,
            active: false,
          };
        });
      });
    },

    toggleType(type) {
      type.active = !type.active;
      this.fetchRestaurants();
    },
  },

  created() {
    this.fetchTypes();
    this.fetchRestaurants();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">Ricerca avanzata</h1>
    <div class="row">
      <div class="col-3">
        <h4>Seleziona i Types</h4>

        <span
          v-for="type in types"
          :key="type.id"
          :class="{
            disabled: !type.active,
          }"
          @click="toggleType(type)"
          class="badge mx-1 clickable"
        >
          {{ type.name }}
        </span>
      </div>
      <div class="col-9">
        <div class="row row-cols-2 g-3">
          <RestaurantCard
            v-for="restaurant in filteredRestaurants"
            :key="restaurant.id"
            :restaurant="restaurant"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.disabled {
  background-color: #555 !important;
}

.clickable {
  cursor: pointer;
}
</style>
