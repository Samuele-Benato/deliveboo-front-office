<script>
import axios from "axios";
import { store } from "../../data/store";
import { RouterView } from "vue-router";
import RestaurantList from "../restaurants/RestaurantList.vue";
import PaginationUi from "../ui/PaginationUi.vue";

export default {
  data() {
    return {
      restaurants: [],
      pagination: [],
    };
  },

  components: { RestaurantList, PaginationUi },

  methods: {
    fetchRestaurants(uri = store.api.baseUrl + "restaurants") {
      axios
        .get(uri)
        .then((response) => {
          this.restaurants = response.data.data;
          //  console.log(this.restaurants);
          this.pagination = response.data.links;
          //   console.log(this.pagination);
        })
        .catch((error) => {
          console.error("Errore nella chiamata API", error);
        });
    },
  },

  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <div class="restaurants-type">
    <div class="container-type-section">
      <h2 class="title-type-section">Che si mangia oggi?</h2>
      <RestaurantList :restaurants="restaurants" />
      <PaginationUi :pagination="pagination" @change-page="fetchRestaurants" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.restaurants-type {
  background-image: url("img/restaurants-type.jpg");
  background-size: 50%;
  background-position: start;
  min-height: 50vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: start;
}

.container-type-section {
  background-color: rgba($color: #fff, $alpha: 0.8);
  padding: 0.5rem;
  border-radius: 5px;
  width: 70%;
}

.title-type-section {
  text-align: center;
  color: #444;
  font-weight: 700;
}
</style>
